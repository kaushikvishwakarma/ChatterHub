'use client'

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

// Stream app configuration
const apiKey = process.env.NEXT_PUBLIC_API_KEY;//ENter you api key here which you will get from getstream app 

const userId = 'user_2rX78b1iKxR1KkMME6SkAgTdMf8';
const userName = 'kaushik';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yclg3OGIxaUt4UjFLa01NRTZTa0FnVGRNZjgifQ.q7EJ7dGovgpff3nixpJzrZPVGAM1D8Av9owU27lDnTs';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

export default function ChatForum({slug}) {
  function toTitleUpperCase(input) {
    return input
        .split(/[\s-]+/) // Split by space or hyphen
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' '); // Join words with a space
}
  const [channel, setChannel] = useState(null);
  console.log(slug);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;
    
    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name:  toTitleUpperCase(slug)+' Discussion',
      members: [userId],
    });
    
    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;
  // const destroy =channel.delete();
  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    
  );
}