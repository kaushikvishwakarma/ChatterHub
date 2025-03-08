'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useUser } from '@clerk/nextjs';
import { Mic, Radio, Sparkles, Volume2, Music, WifiOff, Timer, Share2, Video, X, Users, RefreshCw, Camera, CameraOff, MicOff } from 'lucide-react';

// Create a global user pool for matching
// In a real app, this would be handled by a server
let globalWaitingUsers = [];

export default function VoiceChatClient() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [waitingTime, setWaitingTime] = useState(0);
  const [matchedUser, setMatchedUser] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const [onlineCount, setOnlineCount] = useState(0);
  const searchIntervalRef = useRef(null);
  const waitingIntervalRef = useRef(null);
  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const streamRef = useRef(null);
  
  // Simulate online users count
  useEffect(() => {
    // Start with a random number between 5-15
    setOnlineCount(Math.floor(Math.random() * 10) + 5);
    
    // Update randomly every 10 seconds
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(3, prev + change);
      });
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      // Clear any pending intervals
      if (searchIntervalRef.current) {
        clearInterval(searchIntervalRef.current);
      }
      if (waitingIntervalRef.current) {
        clearInterval(waitingIntervalRef.current);
      }
      
      // Stop camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      // Remove user from waiting list
      if (isSignedIn && user) {
        removeFromWaitingList(user.id);
      }
    };
  }, [isSignedIn, user]);
  
  // Add user to waiting list
  const addToWaitingList = useCallback((userId, userName) => {
    // Check if user is already in the waiting list
    if (!globalWaitingUsers.find(u => u.id === userId)) {
      console.log(`Adding user ${userId} to waiting list`);
      globalWaitingUsers.push({ 
        id: userId, 
        name: userName,
        joinedAt: Date.now()
      });
      console.log('Current waiting list:', globalWaitingUsers);
    }
  }, []);
  
  // Remove user from waiting list
  const removeFromWaitingList = useCallback((userId) => {
    console.log(`Removing user ${userId} from waiting list`);
    globalWaitingUsers = globalWaitingUsers.filter(u => u.id !== userId);
    console.log('Updated waiting list:', globalWaitingUsers);
  }, []);
  
  // Find a match for the current user
  const findMatch = useCallback((userId) => {
    // Find another waiting user that isn't the current user
    const otherUsers = globalWaitingUsers.filter(u => u.id !== userId);
    console.log(`Looking for match for ${userId}. Available users:`, otherUsers);
    
    if (otherUsers.length > 0) {
      // Get the user who has been waiting the longest
      const match = otherUsers.sort((a, b) => a.joinedAt - b.joinedAt)[0];
      console.log(`Found match: ${match.id}`);
      
      // Remove the matched user from the waiting list
      removeFromWaitingList(match.id);
      
      return match;
    }
    
    console.log('No match found');
    return null;
  }, [removeFromWaitingList]);
  
  // Initialize camera
  const initCamera = useCallback(async () => {
    try {
      setCameraError(null);
      
      // Check if browser supports getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Your browser does not support camera access');
      }
      
      console.log('Requesting camera access...');
      
      // Request camera and microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      console.log('Camera access granted:', stream);
      
      // Store the stream reference
      streamRef.current = stream;
      
      // Set the stream as the video source
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Debug: Log when video starts playing
        videoRef.current.onloadedmetadata = () => {
          console.log('Video metadata loaded');
          videoRef.current.play().catch(e => console.error('Error playing video:', e));
        };
      } else {
        console.error('Video ref is not available');
      }
      
      return true;
    } catch (error) {
      console.error('Error accessing camera:', error);
      setCameraError(error.message || 'Failed to access camera and microphone');
      return false;
    }
  }, []);
  
  // Toggle camera
  const toggleCamera = useCallback(() => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCameraOn(videoTrack.enabled);
      }
    }
  }, []);
  
  // Toggle microphone
  const toggleMic = useCallback(() => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }
  }, []);
  
  // Start a random call
  const startRandomCall = useCallback(async () => {
    if (!isSignedIn) {
      alert('You must be logged in to start a call');
      return;
    }
    
    try {
      setIsSearching(true);
      setWaitingTime(0);
      
      // Initialize camera
      console.log('Initializing camera...');
      const cameraInitialized = await initCamera();
      
      if (!cameraInitialized) {
        console.error('Camera initialization failed');
        setIsSearching(false);
        alert(cameraError || 'Failed to access camera. Please check permissions.');
        return;
      }
      
      console.log('Camera initialized successfully');
      
      // Add user to waiting list
      addToWaitingList(user.id, user.firstName || 'Anonymous');
      
      // Start waiting time counter
      waitingIntervalRef.current = setInterval(() => {
        setWaitingTime(prev => prev + 1);
      }, 1000);
      
      // Try to find a match immediately
      const match = findMatch(user.id);
      
      if (match) {
        // Found a match!
        handleMatchFound(match);
      } else {
        // No match found yet, start checking periodically
        searchIntervalRef.current = setInterval(() => {
          const newMatch = findMatch(user.id);
          if (newMatch) {
            clearInterval(searchIntervalRef.current);
            handleMatchFound(newMatch);
          }
        }, 2000);
        
        // For demo purposes, simulate finding a match after a random time between 5-15 seconds
        const randomWaitTime = Math.floor(Math.random() * 10000) + 5000;
        setTimeout(() => {
          if (isSearching) {
            const simulatedMatch = {
              id: 'simulated-user-' + Math.random().toString(36).substring(2, 9),
              name: 'Random User'
            };
            handleMatchFound(simulatedMatch);
          }
        }, randomWaitTime);
      }
    } catch (error) {
      console.error('Error starting random call:', error);
      alert('Failed to start call. Please try again.');
      setIsSearching(false);
      
      // Remove user from waiting list
      if (user) {
        removeFromWaitingList(user.id);
      }
      
      // Clear waiting interval
      if (waitingIntervalRef.current) {
        clearInterval(waitingIntervalRef.current);
      }
    }
  }, [isSignedIn, user, initCamera, cameraError, addToWaitingList, findMatch, removeFromWaitingList]);
  
  // Handle when a match is found
  const handleMatchFound = useCallback((match) => {
    // Clear waiting interval
    if (waitingIntervalRef.current) {
      clearInterval(waitingIntervalRef.current);
    }
    
    // Clear search interval
    if (searchIntervalRef.current) {
      clearInterval(searchIntervalRef.current);
    }
    
    // Remove user from waiting list
    if (user) {
      removeFromWaitingList(user.id);
    }
    
    setMatchedUser(match);
    setIsCallActive(true);
    setIsSearching(false);
    console.log(`Connected with ${match.name}`);
    
    // Update online count to reflect the match
    setOnlineCount(prev => Math.max(3, prev - 1));
  }, [user, removeFromWaitingList]);
  
  // Find next random user
  const findNextUser = useCallback(() => {
    // End current call
    setIsCallActive(false);
    setMatchedUser(null);
    
    // Start a new random call
    setTimeout(() => {
      startRandomCall();
    }, 500);
  }, [startRandomCall]);
  
  // End the current call
  const endCall = useCallback(() => {
    // Stop camera stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    
    setIsCallActive(false);
    setMatchedUser(null);
    
    // Update online count to reflect the user becoming available again
    setOnlineCount(prev => prev + 1);
  }, []);
  
  // Format waiting time
  const formatWaitingTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

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
          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {isCallActive ? 'Video Call Active' : isSearching ? 'Searching for Match' : 'Random Video Chat'}
              </span>
            </div>
          </div>

          {/* Hero Section (hidden during call or searching) */}
          {!isCallActive && !isSearching && (
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
                Random Video Chat{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Experience
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                Connect with random users for spontaneous video conversations. 
                Meet new people and make connections in our secure video chat environment.
              </p>
              
              {/* Online Users Count */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300">{onlineCount} users online</span>
              </div>

              {/* Start Random Call Button */}
              <div className="mt-12 flex items-center justify-center">
                <button
                  onClick={startRandomCall}
                  disabled={!isSignedIn}
                  className={`px-8 py-4 rounded-full text-white font-semibold 
                             bg-gradient-to-r from-purple-500 to-blue-500 
                             hover:from-purple-600 hover:to-blue-600 
                             transition-all duration-200 hover:scale-105
                             flex items-center gap-3
                             ${!isSignedIn ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Video className="w-5 h-5" />
                  Start Random Video Chat
                </button>
              </div>
            </div>
          )}
          
          {/* Waiting Area */}
          {isSearching && !isCallActive && (
            <div className="mt-8 text-center">
              <div className="max-w-2xl mx-auto p-8 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-purple-400 animate-spin" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Finding a Match</h2>
                <p className="text-gray-300 mb-4">Waiting for another user to connect with you...</p>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-gray-700 rounded-lg">
                    <span className="text-gray-300">Waiting time: </span>
                    <span className="text-purple-400 font-mono">{formatWaitingTime(waitingTime)}</span>
                  </div>
                  
                  <div className="px-4 py-2 bg-gray-700 rounded-lg">
                    <span className="text-gray-300">Users online: </span>
                    <span className="text-purple-400 font-mono">{onlineCount}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  {cameraError ? (
                    <div className="w-full max-w-sm mx-auto rounded-lg border border-red-500 bg-gray-900 p-4">
                      <p className="text-red-400">{cameraError}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Please check your camera permissions and try again.
                      </p>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full max-w-sm mx-auto rounded-lg border border-gray-700 bg-gray-900"
                        style={{ minHeight: '240px' }}
                      />
                      <p className="text-gray-400 text-sm mt-2">Your camera preview</p>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    if (user) {
                      removeFromWaitingList(user.id);
                    }
                    if (waitingIntervalRef.current) {
                      clearInterval(waitingIntervalRef.current);
                    }
                    if (searchIntervalRef.current) {
                      clearInterval(searchIntervalRef.current);
                    }
                    if (streamRef.current) {
                      streamRef.current.getTracks().forEach(track => track.stop());
                    }
                    setIsSearching(false);
                  }}
                  className="mt-6 px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors flex items-center gap-2 mx-auto"
                >
                  <X className="w-5 h-5" />
                  Cancel Search
                </button>
              </div>
            </div>
          )}

          {/* Video Call UI */}
          {isCallActive && (
            <div className="mt-8 relative bg-gray-800 rounded-xl overflow-hidden h-[70vh]">
              <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {/* Remote Video */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ minHeight: '240px' }}
                    poster="https://via.placeholder.com/640x480.png?text=Remote+User"
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 px-3 py-1 rounded-lg">
                    <p className="text-white">{matchedUser?.name || 'Remote User'}</p>
                  </div>
                </div>
                
                {/* Local Video */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ minHeight: '240px' }}
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 px-3 py-1 rounded-lg">
                    <p className="text-white">You</p>
                  </div>
                </div>
              </div>
              
              {/* Call controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-full backdrop-blur-sm">
                  <button
                    onClick={toggleMic}
                    className={`p-3 rounded-full ${isMicOn ? 'bg-gray-700' : 'bg-red-500'} hover:bg-opacity-80 text-white transition-colors`}
                    title={isMicOn ? "Mute microphone" : "Unmute microphone"}
                  >
                    {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={toggleCamera}
                    className={`p-3 rounded-full ${isCameraOn ? 'bg-gray-700' : 'bg-red-500'} hover:bg-opacity-80 text-white transition-colors`}
                    title={isCameraOn ? "Turn off camera" : "Turn on camera"}
                  >
                    {isCameraOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={findNextUser}
                    className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                    title="Find next user"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={endCall}
                    className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                    title="End call"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Features Grid (hidden during call or searching) */}
          {!isCallActive && !isSearching && (
            <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Video className="w-6 h-6 text-purple-400" />,
                  title: "Random Matching",
                  description: "Connect with random users for spontaneous video conversations."
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-400" />,
                  title: "Meet New People",
                  description: "Expand your social circle and make new connections worldwide."
                },
                {
                  icon: <RefreshCw className="w-6 h-6 text-purple-400" />,
                  title: "Skip & Next",
                  description: "Easily move to the next conversation with a single click."
                },
                {
                  icon: <Volume2 className="w-6 h-6 text-blue-400" />,
                  title: "Crystal Clear Audio",
                  description: "High-definition audio quality for natural conversations."
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
          )}

          {/* Guidelines Section (hidden during call or searching) */}
          {!isCallActive && !isSearching && (
            <div className="mt-24 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Community Guidelines</h2>
              <div className="max-w-3xl mx-auto p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <ul className="text-left text-gray-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Be respectful and kind to everyone you meet.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Inappropriate behavior or content will result in immediate ban.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Protect your privacy - don't share personal information.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Use the "Next" button to skip to another conversation at any time.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 