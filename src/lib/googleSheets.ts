import { google } from 'googleapis';
import { encrypt } from './crypto';

// Define necessary scopes and constants
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_RANGE = 'Sheet1!A1:H1';

// Exportable Google Auth Client (to use in API routes like route.ts)
export async function getGoogleAuthClient() {
const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? '{}';
const parsed = JSON.parse(raw);
parsed.private_key = parsed.private_key.replace(/\\n/g, '\n');
const credentials = parsed;
    

const client = new google.auth.JWT({
email: credentials.client_email,
key: credentials.private_key,
scopes: SCOPES,
});

await client.authorize();
return client;
}

// Append row to sheet (form submission handler)
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



const row = [
    timestamp,
    encrypt(data.email), // 🔐 ONLY this field is encrypted
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

const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
    values: [row],
    },
});

return response.status === 200 || response.status === 201;
} catch (error: unknown) {
    console.error('❌ Full Google Sheets API Error:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    return false;
}
}
