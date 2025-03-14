'use client';

import { StreamVideoClient } from '@stream-io/video-react-sdk';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const streamClient = new StreamVideoClient({
  apiKey,
  user: {
    id: 'anonymous', // This will be updated when user is authenticated
  },
}); 