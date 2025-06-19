import React from 'react';

export function Logo({ size = 200 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="relative"
      >
        {/* Background stars */}
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="starGradientBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="1" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="starGradientCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
          
          {/* Realistic Earth ocean gradient */}
          <radialGradient id="earthGradient" cx="25%" cy="25%" r="85%">
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="60%" stopColor="#1E40AF" />
            <stop offset="85%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </radialGradient>
          
          {/* Enhanced continent gradients */}
          <radialGradient id="continentGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="30%" stopColor="#16A34A" />
            <stop offset="60%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#14532D" />
          </radialGradient>
          
          <radialGradient id="desertGradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
          
          <radialGradient id="iceGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </radialGradient>
          
          {/* Ring gradients - Enhanced for visibility */}
          <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="25%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#40C4FF" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#2196F3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1976D2" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#00CCFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#29B6F6" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#1E88E5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1565C0" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#40C4FF" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#2196F3" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#1976D2" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#0D47A1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#01579B" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Particle gradients */}
          <radialGradient id="particleGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="particleGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#40C4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#40C4FF" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="particleGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="particleGradient4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
          
          {/* Earth clipping mask */}
          <clipPath id="earthClip">
            <circle cx="100" cy="100" r="45" />
          </clipPath>
          
          {/* Earth atmospheric glow */}
          <radialGradient id="atmosphereGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0" />
            <stop offset="70%" stopColor="#87CEEB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.8" />
          </radialGradient>
          
          {/* Ring glow effect */}
          <filter id="ringGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Earth shadow effect */}
          <filter id="earthShadow">
            <feDropShadow dx="3" dy="3" stdDeviation="5" floodColor="#000000" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* Enhanced Twinkling stars */}
        <g>
          {/* Original stars */}
          <circle cx="20" cy="30" r="1.5" fill="url(#starGradient)" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="40" r="1" fill="url(#starGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="160" r="1.2" fill="url(#starGradient)" opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="170" r="0.8" fill="url(#starGradient)" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="25" r="1.3" fill="url(#starGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="25" cy="150" r="1" fill="url(#starGradient)" opacity="0.7">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="175" cy="180" r="0.9" fill="url(#starGradient)" opacity="0.4">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="15" cy="80" r="1.1" fill="url(#starGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Additional scattered stars for space effect */}
          <circle cx="50" cy="15" r="0.7" fill="url(#starGradientBlue)" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="90" cy="20" r="1.1" fill="url(#starGradient)" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="10" r="0.9" fill="url(#starGradientCyan)" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="185" cy="70" r="0.8" fill="url(#starGradientBlue)" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="190" cy="100" r="1.2" fill="url(#starGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="185" cy="130" r="0.5" fill="url(#starGradientCyan)" opacity="0.4">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="10" cy="50" r="0.8" fill="url(#starGradientBlue)" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.0s" repeatCount="indefinite" />
          </circle>
          <circle cx="5" cy="120" r="1.0" fill="url(#starGradient)" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.3s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Orbital Ring Segments - First Layer (Outer) */}
        <g transform="translate(100, 100) rotate(15) skewY(2)">
          {/* Ring Segment 1 */}
          <ellipse
            cx="0"
            cy="0"
            rx="90"
            ry="20"
            fill="none"
            stroke="url(#ringGradient1)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="40,25"
            opacity="1"
            filter="url(#ringGlow)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="15s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Ring Segment 1 - Inner glow */}
          <ellipse
            cx="0"
            cy="0"
            rx="90"
            ry="20"
            fill="none"
            stroke="#00FFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="40,25"
            opacity="1"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="15s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Particles on first ring */}
          <g>
            <circle r="2.5" fill="url(#particleGradient1)" opacity="1">
              <animateMotion dur="15s" repeatCount="indefinite">
                <path d="M 90,0 A 90,20 0 0,1 85,10 A 90,20 0 0,1 75,18 A 90,20 0 0,1 60,20 A 90,20 0 0,1 40,18"/>
              </animateMotion>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
        
        {/* Orbital Ring Segments - Second Layer (Middle) */}
        <g transform="translate(100, 100) rotate(-10) skewY(-1.5)">
          {/* Ring Segment 2 */}
          <ellipse
            cx="0"
            cy="0"
            rx="75"
            ry="17"
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="35,20"
            opacity="0.9"
            filter="url(#ringGlow)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360"
              to="0"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Ring Segment 2 - Inner glow */}
          <ellipse
            cx="0"
            cy="0"
            rx="75"
            ry="17"
            fill="none"
            stroke="#40C4FF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="35,20"
            opacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360"
              to="0"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Particles on second ring */}
          <g>
            <circle r="2.2" fill="url(#particleGradient2)" opacity="0.9">
              <animateMotion dur="12s" repeatCount="indefinite" begin="3s">
                <path d="M 75,0 A 75,17 0 0,1 70,8 A 75,17 0 0,1 60,15 A 75,17 0 0,1 45,17 A 75,17 0 0,1 25,15"/>
              </animateMotion>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
        
        {/* Orbital Ring Segments - Third Layer (Inner) */}
        <g transform="translate(100, 100) rotate(25) skewY(1)">
          {/* Ring Segment 3 */}
          <ellipse
            cx="0"
            cy="0"
            rx="60"
            ry="14"
            fill="none"
            stroke="url(#ringGradient3)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="30,15"
            opacity="0.8"
            filter="url(#ringGlow)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="10s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Ring Segment 3 - Inner glow */}
          <ellipse
            cx="0"
            cy="0"
            rx="60"
            ry="14"
            fill="none"
            stroke="#2196F3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="30,15"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="10s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Particles on third ring */}
          <g>
            <circle r="1.8" fill="url(#particleGradient3)" opacity="0.8">
              <animateMotion dur="10s" repeatCount="indefinite" begin="1s">
                <path d="M 60,0 A 60,14 0 0,1 55,7 A 60,14 0 0,1 45,12 A 60,14 0 0,1 30,14 A 60,14 0 0,1 15,12"/>
              </animateMotion>
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
        
        {/* Additional floating ring segments */}
        <g transform="translate(100, 100) rotate(45) skewY(-2.5)">
          <ellipse
            cx="0"
            cy="0"
            rx="105"
            ry="23"
            fill="none"
            stroke="url(#ringGradient1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="25,40"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360"
              to="0"
              dur="20s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        <g transform="translate(100, 100) rotate(-35) skewY(3)">
          <ellipse
            cx="0"
            cy="0"
            rx="50"
            ry="12"
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="20,30"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="8s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* Realistic Planet Earth (Center) */}
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="url(#earthGradient)"
          stroke="#1E3A8A"
          strokeWidth="1"
          filter="url(#earthShadow)"
        />
        
        {/* Earth atmospheric glow */}
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="url(#atmosphereGradient)"
          opacity="0.6"
        />
        
        {/* Realistic Earth Continents - All clipped to planet */}
        <g clipPath="url(#earthClip)">
          {/* North America (with integrated "H" shape) */}
          <path 
            d="M 70 70 Q 75 65 85 70 Q 90 75 85 85 L 82 85 L 82 75 L 74 75 L 74 85 L 82 85 Q 85 90 85 95 Q 80 105 75 100 Q 65 95 65 85 Q 67 75 70 70 Z" 
            fill="url(#continentGradient)"
          />
          
          {/* South America */}
          <path 
            d="M 70 120 Q 75 115 80 120 Q 83 130 80 140 Q 78 150 75 145 Q 70 140 68 130 Q 67 125 70 120 Z" 
            fill="url(#continentGradient)"
          />
          
          {/* Africa (Texas-shaped, smaller) */}
          <path 
            d="M 115 85 Q 125 82 135 88 Q 140 92 138 98 Q 135 105 130 108 Q 125 110 120 108 Q 115 105 112 98 Q 110 92 115 85 Z" 
            fill="url(#continentGradient)"
          />
          
          {/* Europe */}
          <path 
            d="M 105 68 Q 115 65 122 70 Q 125 75 122 80 Q 117 82 112 78 Q 107 75 105 68 Z" 
            fill="url(#continentGradient)"
          />
          
          {/* Asia */}
          <path 
            d="M 135 65 Q 145 60 155 70 Q 150 80 145 85 Q 140 90 135 85 Q 130 75 133 70 Q 134 67 135 65 Z" 
            fill="url(#continentGradient)"
          />
          
          {/* Australia */}
          <ellipse cx="135" cy="135" rx="8" ry="4" fill="url(#continentGradient)" />
          
          {/* Greenland */}
          <ellipse cx="85" cy="62" rx="4" ry="3" fill="url(#continentGradient)" />
          
          {/* Some desert areas in Africa and Asia */}
          <ellipse cx="125" cy="95" rx="3" ry="2" fill="url(#desertGradient)" opacity="0.7" />
          <ellipse cx="140" cy="75" rx="2.5" ry="1.5" fill="url(#desertGradient)" opacity="0.6" />
        </g>
        
        {/* Enhanced atmospheric glow layers */}
        <circle
          cx="100"
          cy="100"
          r="47"
          fill="none"
          stroke="#87CEEB"
          strokeWidth="1.5"
          opacity="0.5"
        />
        
        <circle
          cx="100"
          cy="100"
          r="49"
          fill="none"
          stroke="#4A90E2"
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* Floating sparkles around Earth */}
        <circle cx="65" cy="85" r="1.5" fill="#00FFFF" opacity="0.8">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="135" cy="75" r="1.2" fill="#FFFFFF" opacity="0.7">
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="r" values="0.8;1.8;0.8" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="125" cy="125" r="1.3" fill="#40C4FF" opacity="0.9">
          <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="r" values="1;2.2;1" dur="1.8s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="75" cy="115" r="1.1" fill="#00E5FF" opacity="0.6">
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="r" values="0.9;1.9;0.9" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
      
      {/* Company Name */}
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
          Heshware
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Infinite Possibilities
        </p>
      </div>
    </div>
  );
}