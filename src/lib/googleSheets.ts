import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_RANGE = 'Sheet1!A1:H1';

export async function getGoogleAuthClient() {
const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? '{}';
const parsed = JSON.parse(raw);
parsed.private_key = parsed.private_key.replace(/\\n/g, '\n');

const client = new google.auth.JWT({
    email: parsed.client_email,
    key: parsed.private_key,
    scopes: SCOPES,
});

await client.authorize();
return client;
}

export async function appendRowToSheet(data: {
email: string;
q1: string;
productInterests: string[];
q3: string;
q4: string[];
q5: string;
q6: string[];
}) {
const timestamp = new Date()
    .toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    })
    .replace(',', '');

let encryptedEmail = '';
try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/encrypt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: data.email }),
    });
    const result = await response.json();
    encryptedEmail = result.encrypted;
} catch (encryptionError) {
    console.error('❌ Encryption API Error:', encryptionError);
    return false;
}

const row = [
    timestamp,
    encryptedEmail,
    data.q1,
    data.productInterests.join(', '),
    data.q3,
    data.q4.join(', '),
    data.q5,
    data.q6.join(', '),
];

try {
    const auth = await getGoogleAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    try {
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: SHEET_RANGE,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
        values: [row],
        },
    });

    return response.status === 200 || response.status === 201;
    } catch (apiError) {
    console.error('❌ Google Sheets API Error:', apiError);
    return false;
    }
} catch (authError) {
    console.error('❌ Google Auth Client Error:', authError);
    return false;
}
}
