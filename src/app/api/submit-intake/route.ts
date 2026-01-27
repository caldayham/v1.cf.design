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

export async function POST(request: NextRequest) {
  try {
    const formData: IntakeFormData = await request.json();

    if (!formData.name || !formData.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const result = await db.collection('intake_submissions').insertOne({
      ...formData,
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
