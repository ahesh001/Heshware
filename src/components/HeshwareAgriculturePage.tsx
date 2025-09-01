import { ArrowLeft, Home, Leaf, Droplets, Sun, TreePine, Beaker, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeshwareAgriculturePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gentle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-green-900/10"></div>
        
        {/* Floating organic particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-15 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-600 rounded-full opacity-10 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button 
          onClick={() => navigate('/')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </button>
      </nav>

      {/* Header with Root-Sprouting Typography */}
      <section className="relative z-10 text-center py-12">
        {/* Root-Sprouting Typography */}
        <div className="relative inline-block mb-4">
          <div className="relative">
            {/* Main Text with Custom Root Integration */}
            <h1 className="text-5xl md:text-6xl font-bold relative z-20">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Heshware
                </span>
                {/* Brown roots wrapped around "Heshware" with green leaves */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 280 80">
                  {/* Root on the "H" */}
                  <path d="M8 15 Q12 10, 16 12 Q20 14, 18 20 Q16 25, 20 30 Q24 35, 20 40 Q16 45, 18 50 Q20 55, 16 60 Q12 65, 8 60" 
                        stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3s'}} />
                  <ellipse cx="16" cy="25" rx="3" ry="1.5" fill="#22c55e" opacity="0.7" transform="rotate(-20 16 25)" />
                  <ellipse cx="18" cy="45" rx="2.5" ry="1" fill="#16a34a" opacity="0.8" transform="rotate(15 18 45)" />
                  
                  {/* Root on the "e" in Heshware */}
                  <path d="M55 35 Q60 30, 65 35 Q70 40, 65 45 Q60 50, 65 55 Q70 60, 65 65" 
                        stroke="#A0522D" strokeWidth="1.5" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
                  <ellipse cx="65" cy="40" rx="2" ry="1" fill="#22c55e" opacity="0.7" transform="rotate(10 65 40)" />
                  
                  {/* Root on the "s" */}
                  <path d="M75 40 Q80 35, 85 40 Q90 45, 85 50 Q80 55, 85 60" 
                        stroke="#CD853F" strokeWidth="1.5" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.5s'}} />
                  <ellipse cx="85" cy="45" rx="1.5" ry="0.8" fill="#16a34a" opacity="0.9" transform="rotate(-15 85 45)" />
                  
                  {/* Root on the "w" */}
                  <path d="M140 20 Q145 15, 150 20 Q155 25, 150 30 Q145 35, 150 40 Q155 45, 150 50 Q145 55, 150 60" 
                        stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '4.5s'}} />
                  <ellipse cx="150" cy="30" rx="2.5" ry="1.2" fill="#22c55e" opacity="0.8" transform="rotate(25 150 30)" />
                  <ellipse cx="148" cy="50" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(-10 148 50)" />
                  
                  {/* Root on the "a" */}
                  <path d="M175 35 Q180 30, 185 35 Q190 40, 185 45 Q180 50, 185 55" 
                        stroke="#D2691E" strokeWidth="1.5" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '1.5s'}} />
                  <ellipse cx="185" cy="40" rx="2" ry="1" fill="#16a34a" opacity="0.9" transform="rotate(20 185 40)" />
                  
                  {/* Root on the "r" */}
                  <path d="M200 25 Q205 20, 210 25 Q215 30, 210 35 Q205 40, 210 45 Q215 50, 210 55" 
                        stroke="#A0522D" strokeWidth="1.5" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '3.8s', animationDelay: '0.8s'}} />
                  <ellipse cx="210" cy="35" rx="1.8" ry="0.9" fill="#22c55e" opacity="0.8" transform="rotate(-25 210 35)" />
                  
                  {/* Root on the final "e" */}
                  <path d="M225 40 Q230 35, 235 40 Q240 45, 235 50 Q230 55, 235 60" 
                        stroke="#CD853F" strokeWidth="1.5" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}} />
                  <ellipse cx="235" cy="45" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(15 235 45)" />
                </svg>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Agriculture
                </span>
                {/* Brown roots wrapped around "Agriculture" with green leaves */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 320 80">
                  {/* Root on the "A" */}
                  <path d="M15 60 Q20 50, 25 40 Q30 30, 35 20 Q40 30, 45 40 Q50 50, 45 60" 
                        stroke="#8B4513" strokeWidth="2.5" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3.5s'}} />
                  <path d="M25 45 Q35 42, 45 45" 
                        stroke="#A0522D" strokeWidth="2" fill="none" opacity="0.9" />
                  <ellipse cx="30" cy="35" rx="3" ry="1.5" fill="#22c55e" opacity="0.7" transform="rotate(-15 30 35)" />
                  <ellipse cx="40" cy="35" rx="2.5" ry="1.2" fill="#16a34a" opacity="0.8" transform="rotate(15 40 35)" />
                  <ellipse cx="35" cy="45" rx="2" ry="1" fill="#22c55e" opacity="0.9" transform="rotate(0 35 45)" />
                  
                  {/* Root on the "g" */}
                  <path d="M60 40 Q65 35, 70 40 Q75 45, 70 50 Q65 55, 70 60 Q75 65, 70 70 Q65 75, 60 70" 
                        stroke="#CD853F" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
                  <ellipse cx="70" cy="45" rx="2.5" ry="1.2" fill="#22c55e" opacity="0.8" transform="rotate(20 70 45)" />
                  <ellipse cx="68" cy="65" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(-10 68 65)" />
                  
                  {/* Root on the "r" */}
                  <path d="M85 25 Q90 20, 95 25 Q100 30, 95 35 Q90 40, 95 45 Q100 50, 95 55 Q90 60, 85 55" 
                        stroke="#D2691E" strokeWidth="1.8" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3.2s', animationDelay: '0.5s'}} />
                  <ellipse cx="95" cy="35" rx="2" ry="1" fill="#16a34a" opacity="0.9" transform="rotate(-20 95 35)" />
                  
                  {/* Root on the "i" */}
                  <path d="M105 25 Q110 20, 115 25 Q120 30, 115 35 Q110 40, 115 45 Q120 50, 115 55 Q110 60, 105 55" 
                        stroke="#B8860B" strokeWidth="1.5" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '3.8s', animationDelay: '1.2s'}} />
                  <ellipse cx="115" cy="30" rx="1.5" ry="0.8" fill="#22c55e" opacity="0.8" transform="rotate(25 115 30)" />
                  <circle cx="115" cy="18" r="1" fill="#22c55e" opacity="0.9" />
                  
                  {/* Root on the "c" */}
                  <path d="M130 40 Q135 35, 140 40 Q145 45, 140 50 Q135 55, 140 60 Q145 65, 140 70" 
                        stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '4.2s', animationDelay: '0.8s'}} />
                  <ellipse cx="140" cy="45" rx="2.2" ry="1.1" fill="#16a34a" opacity="0.7" transform="rotate(15 140 45)" />
                  
                  {/* Root on the "u" */}
                  <path d="M160 40 Q165 35, 170 40 Q175 45, 170 50 Q165 55, 170 60 Q175 65, 180 60 Q185 55, 180 50 Q175 45, 180 40" 
                        stroke="#A0522D" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '3.6s', animationDelay: '1.8s'}} />
                  <ellipse cx="170" cy="45" rx="2" ry="1" fill="#22c55e" opacity="0.8" transform="rotate(-15 170 45)" />
                  <ellipse cx="180" cy="45" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(15 180 45)" />
                  
                  {/* Root on the "l" */}
                  <path d="M190 15 Q195 10, 200 15 Q205 20, 200 25 Q195 30, 200 35 Q205 40, 200 45 Q195 50, 200 55 Q205 60, 200 65" 
                        stroke="#CD853F" strokeWidth="1.5" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '4.5s', animationDelay: '0.3s'}} />
                  <ellipse cx="200" cy="25" rx="1.8" ry="0.9" fill="#16a34a" opacity="0.9" transform="rotate(30 200 25)" />
                  <ellipse cx="198" cy="50" rx="1.5" ry="0.8" fill="#22c55e" opacity="0.7" transform="rotate(-20 198 50)" />
                  
                  {/* Root on the "t" */}
                  <path d="M210 20 Q215 15, 220 20 Q225 25, 220 30 Q215 35, 220 40 Q225 45, 220 50 Q215 55, 220 60" 
                        stroke="#D2691E" strokeWidth="1.8" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '3.4s', animationDelay: '1.5s'}} />
                  <path d="M205 30 Q220 28, 235 30" 
                        stroke="#B8860B" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <ellipse cx="220" cy="35" rx="2" ry="1" fill="#22c55e" opacity="0.8" transform="rotate(10 220 35)" />
                  
                  {/* Root on the "u" */}
                  <path d="M240 40 Q245 35, 250 40 Q255 45, 250 50 Q245 55, 250 60 Q255 65, 260 60 Q265 55, 260 50 Q255 45, 260 40" 
                        stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3.8s', animationDelay: '2.2s'}} />
                  <ellipse cx="250" cy="45" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(-10 250 45)" />
                  <ellipse cx="260" cy="45" rx="2" ry="1" fill="#22c55e" opacity="0.8" transform="rotate(10 260 45)" />
                  
                  {/* Root on the "r" */}
                  <path d="M275 25 Q280 20, 285 25 Q290 30, 285 35 Q280 40, 285 45 Q290 50, 285 55" 
                        stroke="#A0522D" strokeWidth="1.8" fill="none" opacity="0.7" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
                  <ellipse cx="285" cy="35" rx="1.8" ry="0.9" fill="#22c55e" opacity="0.9" transform="rotate(-25 285 35)" />
                  
                  {/* Root on the "e" */}
                  <path d="M295 40 Q300 35, 305 40 Q310 45, 305 50 Q300 55, 305 60 Q310 65, 305 70" 
                        stroke="#CD853F" strokeWidth="1.8" fill="none" opacity="0.8" className="animate-pulse" style={{animationDuration: '3.6s', animationDelay: '0.7s'}} />
                  <ellipse cx="305" cy="45" rx="2" ry="1" fill="#16a34a" opacity="0.7" transform="rotate(20 305 45)" />
                </svg>
              </span>
            </h1>
          </div>
        </div>
        
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8 mb-8">
          Cannabis Cultivation, Smart Farming, Hydroponics, Food Tech
        </p>

        {/* Cannabis Store Button */}
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/40 p-6 rounded-2xl border border-green-500/40 backdrop-blur-sm max-w-lg mx-auto mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Cannabis Store</h3>
              <p className="text-green-400 text-sm">Coming Soon - Premium Products</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            Experience our premium cannabis products cultivated with cutting-edge technology and sustainable practices.
          </p>
          <button 
            onClick={() => navigate('/cannabis-store')}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Visit Our Store
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/30 p-8 rounded-2xl border border-green-500/30 mb-12 backdrop-blur-sm">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Revolutionizing Agriculture
              </p>
              <p>
                Heshware Agriculture combines cutting-edge technology with sustainable farming practices to create the future of food production and cannabis cultivation.
              </p>
              <p className="text-xl text-emerald-400 font-semibold">
                Growing the future, one innovation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Agricultural Innovation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Cannabis Cultivation</h3>
              <p className="text-slate-300 text-sm">
                Advanced cultivation techniques for premium cannabis production with optimal THC/CBD profiles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Hydroponics</h3>
              <p className="text-slate-300 text-sm">
                Soil-free growing systems with precise nutrient delivery for maximum yield and quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 to-green-900/40 p-6 rounded-2xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-teal-400 mb-3">Smart Farming</h3>
              <p className="text-slate-300 text-sm">
                IoT sensors, AI-driven monitoring, and automated systems for optimal growing conditions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-lime-900/40 to-green-900/40 p-6 rounded-2xl border border-lime-500/30 hover:border-lime-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <Beaker className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-lime-400 mb-3">Food Tech</h3>
              <p className="text-slate-300 text-sm">
                Innovative food production technologies and sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cannabis Focus */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-green-900/60 to-emerald-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Cannabis Excellence</h2>
              <p className="text-slate-300 text-lg mb-6">
                Our cannabis cultivation program focuses on producing premium-quality cannabis using state-of-the-art growing techniques, 
                environmental controls, and genetic optimization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Climate-controlled growing environments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Genetic strain optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Organic growing practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Full compliance with regulations</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
              <div className="text-center">
                <TreePine className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Sustainable Cultivation</h3>
                <p className="text-slate-300">
                  Environmentally responsible growing practices that prioritize sustainability, 
                  energy efficiency, and minimal environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Technology Integration</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">AI-Powered Growing Systems</h3>
              <p className="text-slate-300 mb-4">
                Leveraging artificial intelligence to monitor plant health, optimize growing conditions, and predict optimal harvest times.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Development Phase</span>
                <span className="text-slate-500 text-sm">20% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 p-8 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Smart Greenhouse Infrastructure</h3>
              <p className="text-slate-300 mb-4">
                Building next-generation greenhouse facilities with automated climate control, nutrient delivery, and monitoring systems.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Planning Phase</span>
                <span className="text-slate-500 text-sm">10% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Grow the Future With Us</h2>
          <p className="text-slate-300 text-xl mb-8">
            Partner with us to revolutionize agriculture through technology and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => navigate('/mission-expansion')}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              View Roadmap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}