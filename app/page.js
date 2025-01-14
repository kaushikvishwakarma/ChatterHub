import Image from "next/image";
import React from 'react';
import { MessageCircle, Users, Globe, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative pt-20 pb-24 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                ChatterHub
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Connect, collaborate, and communicate with friends and colleagues in real-time. 
              Experience the next level of conversation with our modern chat platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/forums"
                className="rounded-full px-8 py-3 text-base font-semibold text-white shadow-sm 
                         bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 
                         hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="text-base font-semibold leading-7 text-gray-300 hover:text-white"
              >
                Live Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative p-6 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-500/20 rounded-full">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Chat</h3>
                <p className="text-gray-400">Instant messaging with real-time updates and notifications.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative p-6 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/20 rounded-full">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Group Chats</h3>
                <p className="text-gray-400">Create and manage group conversations with ease.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative p-6 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-500/20 rounded-full">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Access</h3>
                <p className="text-gray-400">Connect with people from anywhere in the world.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 py-12 border-t border-gray-700">
            <dl className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-3 text-center">
              <div>
                <dt className="text-base leading-7 text-gray-400">Active Users</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">100,000+</dd>
              </div>
              <div>
                <dt className="text-base leading-7 text-gray-400">Messages Sent</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">1M+</dd>
              </div>
              <div>
                <dt className="text-base leading-7 text-gray-400">Countries</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">150+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
export const Metadata ={
  title:"Home - ChatterHub",
  description:'Just Chat!!!'
}
