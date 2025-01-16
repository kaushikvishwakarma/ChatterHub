import React from 'react';
import { Mic, Radio, Sparkles, Volume2, Music, WifiOff, Timer, Share2 } from 'lucide-react';

export default function VoiceChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl">
          {/* Animated Circles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen">
        <div className="relative pt-20 pb-24 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              Voice Chat is{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Coming
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              Experience the next evolution of ChatterHub with crystal-clear voice chat. 
              Connect with friends and colleagues like they're right beside you.
            </p>

            {/* Notification Form */}
            <div className="mt-12 flex items-center justify-center gap-x-4">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white w-full max-w-sm 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-8 py-3 rounded-full text-white font-semibold 
                               bg-gradient-to-r from-purple-500 to-blue-500 
                               hover:from-purple-600 hover:to-blue-600 
                               transition-all duration-200 hover:scale-105">
                Notify Me
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Radio className="w-6 h-6 text-purple-400" />,
                title: "Crystal Clear Audio",
                description: "High-definition voice quality that makes every conversation feel natural."
              },
              {
                icon: <Volume2 className="w-6 h-6 text-blue-400" />,
                title: "Noise Cancellation",
                description: "Advanced AI-powered background noise reduction for pristine calls."
              },
              {
                icon: <WifiOff className="w-6 h-6 text-purple-400" />,
                title: "Low Latency",
                description: "Real-time voice transmission with minimal delay for smooth conversations."
              },
              {
                icon: <Share2 className="w-6 h-6 text-blue-400" />,
                title: "Screen Sharing",
                description: "Share your screen while voice chatting for better collaboration."
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-6 bg-gray-800 rounded-lg transform transition-transform group-hover:scale-[1.02]">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-500/20 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Launch Timeline</h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-gray-800 border-2 border-purple-500/30 group hover:border-purple-500 transition-colors">
                <div className="text-center">
                  <Timer className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Beta Testing</span>
                  <p className="text-white font-semibold">March 2025</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-gray-800 border-2 border-blue-500/30 group hover:border-blue-500 transition-colors">
                <div className="text-center">
                  <Music className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Early Access</span>
                  <p className="text-white font-semibold">April 2025</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-gray-800 border-2 border-purple-500/30 group hover:border-purple-500 transition-colors">
                <div className="text-center">
                  <Mic className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Full Launch</span>
                  <p className="text-white font-semibold">May 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Voice Chat - Coming Soon | ChatterHub",
  description: "Experience the future of communication with ChatterHub's upcoming voice chat feature."
};