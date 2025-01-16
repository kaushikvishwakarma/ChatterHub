import React from 'react';
import { MessageCircle, Users, Sparkles, ArrowRight, Bell } from 'lucide-react';

const DualChatComingSoon = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          {/* Feature Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Exciting New Feature
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Dual Chat Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Coming Soon
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Get ready for an immersive dual chat experience. Chat with two different people simultaneously in a beautifully designed interface.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="mt-16 relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 blur-lg" />
            <div className="relative bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Preview Window */}
                <div className="relative group bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-24 bg-gray-700 rounded animate-pulse" />
                      <div className="h-2 w-16 bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Right Preview Window */}
                <div className="relative group bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity blur" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-24 bg-gray-700 rounded animate-pulse" />
                      <div className="h-2 w-16 bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="w-6 h-6 text-purple-400" />,
                title: "Dual Conversations",
                description: "Chat with two different people simultaneously in a seamless interface"
              },
              {
                icon: <Bell className="w-6 h-6 text-blue-400" />,
                title: "Smart Notifications",
                description: "Never miss a message with intelligent notifications for both chats"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                title: "Rich Features",
                description: "Share media, emojis, and more in both conversations"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-6 bg-gray-800 rounded-lg transform transition-transform group-hover:scale-[1.02]">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Notification Form */}
          <div className="mt-16 text-center">
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <button className="relative px-8 py-3 text-base font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 flex items-center gap-2 transition-all duration-200 hover:scale-105">
                  Get Notified When Live
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DualChatComingSoon;