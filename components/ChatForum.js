'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

const ChatForum = ({clerkUser, slug}) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(slug)+' Discussion',
    });

    setChannel(channel);
    
  }, [client]);

  if (!client) return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Setting up client & connection...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {capitalize(slug)} Discussion Forum
          </h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
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
        </div>
      </div>
    </div>
  );
}

export default ChatForum;