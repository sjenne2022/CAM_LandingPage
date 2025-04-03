import { NextRequest, NextResponse } from 'next/server';
import { appendRowToSheet } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
try {
    const body = await req.json();

    console.log('[Server] Incoming form data:', body);

    const success = await appendRowToSheet({
    email: body.email,
    q1: body.q1,
    productInterests: body.productInterests || [],
    q3: body.q3,
    q4: body.q4 || [],
    q5: body.q5,
    q6: body.q6 || [],
    });

    if (!success) {
    throw new Error('Google Sheets write failed');
    }

    return NextResponse.json({ success: true });
} catch (err) {
    console.error('[Server] Error writing to Google Sheets:', err);
    return NextResponse.json({ error: 'Failed to write to Google Sheets' }, { status: 500 });
}
}
