import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // In a real implementation, you would use the Stream SDK to generate a token
    // For now, we'll return the analytics token from the environment variables
    const token = process.env.NEXT_PUBLIC_ANALYTICS_TOKEN;
    
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error generating Stream token:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 