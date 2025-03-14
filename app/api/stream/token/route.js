import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { StreamChat } from 'stream-chat';

export async function GET() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_SECRET_KEY;
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials not configured');
    }
    
    const client = StreamChat.getInstance(apiKey, apiSecret);
    const token = client.createToken(userId);
    
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error generating Stream token:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 