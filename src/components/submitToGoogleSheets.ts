export async function submitToGoogleSheet(formData: {
email: string;
q1: string;
productInterests: string[];
q3: string;
q4: string[];
q5: string;
q6: string[];
}): Promise<{ success: boolean; message?: string }> {
try {
    const res = await fetch('/api/google/route', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
    return { success: false, message: data.error ?? 'Unknown error' };
    }

    return { success: true };
} catch (err) {
    console.error('Frontend error submitting to Google Sheets:', err);
    return { success: false, message: 'Something went wrong. Try again.' };
}
}
