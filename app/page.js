import React from 'react';
import { MessageCircle, Users, Globe, Sparkles, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16"> {/* Added pt-16 for navbar space */}
      {/* Enhanced Background Effects */}
      <div className=" overflow-hidden"> {/* Added top-16 to start below navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl">
          {/* Animated Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="relative pt-5 pb-24 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Next Generation Chat Platform
              </span>
            </div>
          </div>

          {/* Enhanced Hero Section */}
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Welcome to{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  ChatterHub
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Connect, collaborate, and communicate with friends and colleagues in real-time. 
              Experience the next level of conversation with our modern chat platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/forums"
                className="group relative rounded-full px-8 py-3 text-base font-semibold text-white shadow-sm 
                         bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 
                         hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <Zap className="w-4 h-4 animate-pulse" />
                </span>
              </a>
              <a
                href="/demo"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Live Demo
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"></div>
              </a>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
                title: "Real-time Chat",
                description: "Instant messaging with real-time updates and notifications.",
                bgColor: "bg-purple-500/20"
              },
              {
                icon: <Users className="w-6 h-6 text-blue-400" />,
                title: "Group Chats",
                description: "Create and manage group conversations with ease.",
                bgColor: "bg-blue-500/20"
              },
              {
                icon: <Globe className="w-6 h-6 text-purple-400" />,
                title: "Global Access",
                description: "Connect with people from anywhere in the world.",
                bgColor: "bg-purple-500/20"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-6 bg-gray-800 rounded-lg transform transition-transform group-hover:scale-[1.02]">
                  <div className={`flex items-center justify-center w-12 h-12 mb-4 ${feature.bgColor} rounded-full`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-20 py-12 border-t border-gray-700">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { label: "Active Users", value: "100,000+", icon: <Users className="w-6 h-6 text-purple-400" /> },
                { label: "Messages Sent", value: "1M+", icon: <MessageCircle className="w-6 h-6 text-blue-400" /> },
                { label: "Countries", value: "150+", icon: <Globe className="w-6 h-6 text-purple-400" /> }
              ].map((stat, index) => (
                <div key={index} className="relative group px-6 py-8 rounded-lg bg-gray-800/50 text-center">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                  <dt className="flex items-center justify-center gap-2 text-base leading-7 text-gray-400 mb-4">
                    {stat.icon}
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* New Trust Badge Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">Trusted by developers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Home - ChatterHub",
  description: "Experience the next level of communication with ChatterHub's modern chat platform."
};