'use client'
import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'lucky-bar-6';
const userName = 'lucky';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibHVja3ktYmFyLTYiLCJleHAiOjE3MzY3NzU2MDF9.6QQy1zeMdRDKqPRxWcKQhByIWK5JfnuIukrf2yo8Kj8';

export default  function ChatForum() {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: { id: userId },
      });

      
    

    if (!client) return <div>Setting up client & connection...</div>;

  return <Chat client={client}>Chat with client is ready!</Chat>;
  }