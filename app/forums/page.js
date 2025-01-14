import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//added export here so that i can
export const topics = [
    {
        text: "Python",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        desc: "Let's discuss about Python here...",
        url:"python"

    },
    {
        text: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        desc: "Explore the world of JavaScript and modern web development.",
        url:"JS"
    },
    {
        text: "C++",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        desc: "Dive deep into C++ programming concepts and advanced techniques.",
        url:"Cpp"
    },
    {
        text: "Blender",
        img: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
        desc: "Discuss 3D modeling, rendering, and animation in Blender.",
        url:"Blender"
    },
    {
        text: "Unreal Engine",
        img: "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
        desc: "Learn about game development and Blueprints in Unreal Engine.",
        url:"UnrealEngine"
    },
    {
        text: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", // Using git icon as placeholder
        desc: "Understand and implement fundamental of Git for efficient coding.",
        url:"git "
    }
];

const Forums = () => {
  return (
    <div className="min-h-screen mt-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto py-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
            Discussion{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Forums
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our vibrant community discussions on various programming topics and technologies.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div 
              key={topic.text}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity blur-lg" />
              
              {/* Card Content */}
              <div className="relative p-6 bg-gray-800 rounded-xl transition-transform duration-300 group-hover:scale-[0.99] h-full">
                <div className="flex flex-col items-center h-full">
                  {/* Icon Container */}
                  <div className="w-16 h-16 mb-4 p-3 rounded-full bg-gray-700/50 flex items-center justify-center shrink-0">
                    <Image
                      src={topic.img}
                      alt={topic.text}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col items-center justify-between w-full">
                    <div className="text-center mb-4">
                      <h2 className="text-xl font-semibold text-white mb-2">{topic.text}</h2>
                      <p className="text-gray-400 text-sm line-clamp-3">{topic.desc}</p>
                    </div>

                    {/* Button */}
                    <Link href={`/forum/${topic.url}`}>
                    <button className="rounded-full px-6 py-2 text-sm font-semibold text-white 
                                     bg-gradient-to-r from-purple-500 to-blue-500 
                                     hover:from-purple-600 hover:to-blue-600 
                                     transition-all duration-200 hover:scale-105 mt-auto">
                      Join Discussion
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;

export const metadata = {
  title: "Forums - ChatterHub",
  description: "Join our programming community discussions"
};
