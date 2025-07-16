import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AIShowcaseSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Subtle background illustration */}
      <img src="/placeholder.svg" alt="background" className="absolute opacity-10 w-[900px] h-[900px] left-[-200px] top-[-200px] pointer-events-none select-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          The power of AI<br />right where you work
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Left: Project Board */}
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm flex-shrink-0 relative overflow-hidden min-h-[340px] shadow-2xl border border-gray-800">
            <div className="absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-1 rounded shadow text-sm font-medium flex items-center gap-2">
              <span role="img" aria-label="task">🗂️</span> Prioritize tasks
            </div>
            <div className="absolute top-14 left-4 bg-white/90 text-gray-900 px-3 py-1 rounded shadow text-sm font-medium flex items-center gap-2">
              <span role="img" aria-label="person">👤</span> Assign person
            </div>
            <div className="mt-12">
              <div className="text-lg font-semibold mb-2 text-white">H1 Initiatives</div>
              <div className="flex gap-2 mb-2 text-xs text-gray-300">
                <span>Main table</span>
                <span>Gantt</span>
                <span>Kanban</span>
                <span>+</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Finalize kickoff materials</span>
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs shadow">Done</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Refine objectives</span>
                  <span className="bg-yellow-500 text-white px-2 py-0.5 rounded text-xs shadow">Working on it</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Deploy resources</span>
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs shadow">Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Creative AI Card */}
          <div className="relative bg-gradient-to-br from-[#6c63ff] via-[#a084ff] to-[#4f46e5] rounded-2xl p-8 w-full max-w-sm flex flex-col items-center min-h-[340px] shadow-2xl border border-indigo-400 overflow-hidden">
            {/* Glowing AI chip/brain SVG */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-30 animate-pulse" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" fill="url(#aiGlow)" />
              <g filter="url(#glow)">
                <path d="M60 30c16 0 30 14 30 30s-14 30-30 30-30-14-30-30 14-30 30-30z" fill="#fff" fillOpacity="0.15" />
                <path d="M60 45c8 0 15 7 15 15s-7 15-15 15-15-7-15-15 7-15 15-15z" fill="#fff" fillOpacity="0.25" />
              </g>
              <circle cx="60" cy="60" r="8" fill="#fff" fillOpacity="0.7" />
              <defs>
                <radialGradient id="aiGlow" cx="0" cy="0" r="1" gradientTransform="translate(60 60) scale(60)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a084ff" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#6c63ff" stopOpacity="0" />
                </radialGradient>
                <filter id="glow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            {/* Layered circular avatars */}
            <div className="flex items-center justify-center mb-8 relative z-10">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <Avatar className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white shadow-lg z-10">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="VEEKDAYS Expert" />
                  <AvatarFallback className="text-blue-700 text-xl font-bold bg-blue-200">VE</AvatarFallback>
                </Avatar>
                <Avatar className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white shadow-lg z-10">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Project Analyst" />
                  <AvatarFallback className="text-purple-700 text-xl font-bold bg-purple-200">PA</AvatarFallback>
                </Avatar>
                <Avatar className="absolute left-1/2 top-0 -translate-x-1/2 w-16 h-16 border-4 border-white shadow-lg z-20">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/65.jpg" alt="AI Advisor" />
                  <AvatarFallback className="text-yellow-700 text-xl font-bold bg-yellow-200">AA</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* AI Insight Chat Bubble */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-6 py-3 rounded-xl shadow-lg text-center text-base font-medium flex items-center gap-2 z-20 border border-indigo-100">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><circle cx="12" cy="10" r="6" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v4" /></svg>
              "AI Insight: Your team is on track!"
            </div>
            <div className="text-center relative z-10 mt-8">
              <div className="font-bold text-lg text-white mb-1 drop-shadow">VEEKDAYS Expert</div>
              <div className="text-white/80 text-sm drop-shadow">Project Analyst & AI Advisor</div>
            </div>
            {/* Animated glow overlay */}
            <div className="absolute inset-0 pointer-events-none animate-pulse" style={{boxShadow: '0 0 80px 10px #a084ff, 0 0 120px 40px #6c63ff'}}></div>
          </div>

          {/* Right: Risk/Status Dashboard */}
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm flex-shrink-0 min-h-[340px] relative overflow-hidden shadow-2xl border border-gray-800">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-xs ml-2 text-white font-medium">High risk &nbsp; Medium risk &nbsp; Low risk &nbsp; No risk</span>
              </div>
              <div className="bg-gray-800 rounded mb-2 p-2 flex items-center justify-between shadow">
                <span className="text-sm text-white font-medium">Alpha project</span>
                <span className="flex gap-1">
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs shadow font-bold">5</span>
                  <span className="bg-orange-400 text-white px-2 py-0.5 rounded text-xs shadow font-bold">2</span>
                  <span className="bg-yellow-400 text-white px-2 py-0.5 rounded text-xs shadow font-bold">2</span>
                </span>
              </div>
              <div className="bg-gray-800 rounded mb-2 p-2 flex items-center justify-between shadow">
                <span className="text-sm text-white font-medium">Employee onboarding</span>
                <span className="bg-orange-400 text-white px-2 py-0.5 rounded text-xs shadow font-bold">1</span>
              </div>
              <div className="bg-gray-800 rounded mb-2 p-2 flex items-center justify-between shadow">
                <span className="text-sm text-white font-medium">SEO optimization</span>
                <span className="bg-yellow-400 text-white px-2 py-0.5 rounded text-xs shadow font-bold">1</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 text-white px-4 py-2 rounded shadow text-xs flex items-center gap-2 backdrop-blur-sm">
              <span className="font-bold text-white">Trend</span>
              <span className="text-white font-medium">There are multiple resource allocation issues occurring in the Migration Initiative.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection; 