import React from 'react';
import { Heart, Shield, Clock, Target, Linkedin, Github } from 'lucide-react';

export default function about() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative pt-20 pb-24 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                ChatterHub
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize the way people connect and communicate online. 
              Founded with the belief that meaningful conversations should be accessible to everyone, 
              ChatterHub has grown from a simple idea into a global community.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="https://linkedin.com/company/chatterhub"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"></div>
              </a>
              <a
                href="https://github.com/kaushikvishwakarma"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all group-hover:w-full"></div>
              </a>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-8 bg-gray-800 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To create a secure and intuitive platform where people can connect, share ideas, 
                    and build meaningful relationships regardless of geographical boundaries. We believe 
                    in the power of communication to bring people together and make the world a little bit smaller.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-8 bg-gray-800 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We envision a world where distance is no barrier to human connection. 
                    Through innovative technology and user-centered design, we're building 
                    bridges between cultures, communities, and individuals across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Heart className="w-6 h-6 text-purple-400" />,
                  title: "User First",
                  description: "Every feature and decision is made with our users in mind."
                },
                {
                  icon: <Shield className="w-6 h-6 text-blue-400" />,
                  title: "Security",
                  description: "Your privacy and security are our top priorities."
                },
                {
                  icon: <Clock className="w-6 h-6 text-purple-400" />,
                  title: "Reliability",
                  description: "We're here when you need us, 24/7, around the globe."
                },
                {
                  icon: <Target className="w-6 h-6 text-blue-400" />,
                  title: "Innovation",
                  description: "Constantly evolving to provide the best chat experience."
                }
              ].map((value, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
                  <div className="relative p-6 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-500/20 rounded-full">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team. 
              If you believe in our mission and want to help shape the future of online communication, 
              we'd love to hear from you.
            </p>
            <div className="mt-8">
              <a
                href="/careers"
                className="rounded-full px-8 py-3 text-base font-semibold text-white shadow-sm 
                         bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 
                         hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About Us - ChatterHub",
  description: "Learn about ChatterHub's mission, values, and the team behind the platform."
};