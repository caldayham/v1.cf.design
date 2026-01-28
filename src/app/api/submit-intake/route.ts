import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

interface IntakeFormData {
  isLocal: boolean | null;
  situation: string;
  referralSource: string;
  projectDescription: string;
  name: string;
  phone: string;
}

function splitName(fullName: string): { firstName: string; lastName: string | null } {
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/);

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: null };
  }

  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
}

export async function POST(request: NextRequest) {
  try {
    const formData: IntakeFormData = await request.json();

    if (!formData.name || !formData.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const { firstName, lastName } = splitName(formData.name);
    const { db } = await connectToDatabase();

    const result = await db.collection('intake_submissions').insertOne({
      ...formData,
      firstName,
      lastName,
      submittedAt: new Date(),
    });

    if (result.acknowledged) {
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } else {
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
