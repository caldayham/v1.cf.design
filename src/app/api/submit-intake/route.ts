import { NextRequest, NextResponse } from 'next/server';

interface IntakeFormData {
  isLocal: boolean | null;
  situation: string;
  yearsOwned: string;
  projectDescription: string;
  name: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  try {
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!appsScriptUrl || appsScriptUrl.includes('YOUR_SCRIPT_ID_HERE')) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const formData: IntakeFormData = await request.json();

    if (!formData.name || !formData.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } else {
      console.error('Apps Script error:', result.error);
      return NextResponse.json(
        { success: false, error: 'Failed to save form data' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
