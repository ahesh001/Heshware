import { ArrowLeft, Home, Target, Sprout, Building2, Rocket, Brain, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MissionExpansionPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <button 
          onClick={() => navigate('/')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </button>
      </nav>

      {/* Header */}
      <section className="relative z-10 text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Target className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Mission Expansion
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          Our 5-Year Vision for Revolutionary Growth & Innovation
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-2xl border border-slate-700 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Heshware is not just a software company.
              </p>
              <p>
                We are a boundary-breaking innovation firm dedicated to reshaping the future—starting with AI and quantum systems, and expanding into licensed cannabis cultivation, organic food growth, and on-site community kitchens.
              </p>
              <p className="text-xl text-cyan-400 font-semibold">
                Our goal is to build a holistic ecosystem where advanced technology meets sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="relative z-10 px-8 py-20 pb-40">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line (connects to top of Vision 2030) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-30"
                 style={{ height: 'calc(100% - 380px)' }}></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              
              {/* Year 1-2: Foundation & Innovation Core */}
              <div className="relative flex items-center">
                <div className="flex w-full">
                  {/* Left Side Content */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 ml-auto max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                            <span className="text-xl">🚀</span>
                            Year 1–2
                          </h3>
                          <p className="text-blue-300 text-sm">2025–2026</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Foundation & Innovation Core</h4>
                      <p className="text-slate-300 mb-6">
                        Cement Heshware as a next-gen software company specializing in AI and quantum technologies.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-blue-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Develop flagship AI products (Marven) and quantum simulations
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          Build Heshware Developer Portal & GitHub ecosystem
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Begin cannabis automation & vertical farming R&D
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          Secure state cannabis licensing applications
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Right Side (Empty) */}
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>

              {/* Year 2-3: Cannabis, Cultivation & Conscious Tech */}
              <div className="relative flex items-center">
                <div className="flex w-full">
                  {/* Left Side (Empty) */}
                  <div className="w-1/2 pr-8"></div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                      <Sprout className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Right Side Content */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 mr-auto max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Sprout className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                            <span className="text-xl">🌿</span>
                            Year 2–3
                          </h3>
                          <p className="text-green-300 text-sm">2026–2027</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Cannabis, Cultivation & Conscious Tech</h4>
                      <p className="text-slate-300 mb-6">
                        Enter the legal cannabis industry with Heshware-branded products and smart agricultural infrastructure.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-green-300">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Establish licensed cannabis grow facility (climate-controlled)
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-300">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                          Launch AI-driven grow optimization tools
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-300">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Begin local distribution of Heshware cannabis products
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-300">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                          Secure FDA-compliant food prep protocols
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 3-4: Heshware Labs */}
              <div className="relative flex items-center">
                <div className="flex w-full">
                  {/* Left Side Content */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 ml-auto max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
                            <span className="text-xl">🧠</span>
                            Year 3–4
                          </h3>
                          <p className="text-purple-300 text-sm">2027–2028</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Heshware Labs – AI, Agriculture & Alchemy</h4>
                      <p className="text-slate-300 mb-6">
                        Multi-use facility showcasing the intersection of code, food, and consciousness.
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm text-purple-300 font-semibold mb-2">Heshware Labs HQ Features:</div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          AI research studio (Marven, neural tools)
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                          Quantum code incubation lab
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          Indoor growrooms (cannabis & organic food)
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                          Farm-to-table kitchen & media studio
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          Launch "The Heshware Garden" community experience
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Right Side (Empty) */}
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>

              {/* Year 4-5: Global Positioning */}
              <div className="relative flex items-center">
                <div className="flex w-full">
                  {/* Left Side (Empty) */}
                  <div className="w-1/2 pr-8"></div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Right Side Content */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/40 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 mr-auto max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
                            <span className="text-xl">⚡</span>
                            Year 4–5
                          </h3>
                          <p className="text-orange-300 text-sm">2028–2029</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Global Positioning & Decentralized Expansion</h4>
                      <p className="text-slate-300 mb-6">
                        Evolve into a replicable model — deployable hubs of conscious innovation worldwide.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-orange-300">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          Global partnerships with urban farming & AI collectives
                        </div>
                        <div className="flex items-center gap-2 text-sm text-orange-300">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Open satellite "HeshPods" for underserved regions
                        </div>
                        <div className="flex items-center gap-2 text-sm text-orange-300">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          International patents for AI grow systems
                        </div>
                        <div className="flex items-center gap-2 text-sm text-orange-300">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Pilot QFAEN energy-recapture technology
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision 2030 - Standalone Section with Gap */}
              <div className="relative flex items-center mt-32">
                <div className="flex w-full">
                  {/* Full Width Content Centered */}
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-12 rounded-3xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 max-w-4xl mx-auto text-center relative z-10">
                      <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Zap className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-indigo-400 flex items-center gap-3">
                            <span className="text-3xl">🪐</span>
                            Vision 2030
                          </h3>
                          <p className="text-indigo-300">The Infinite Loop of Innovation</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-indigo-500/20 p-6 rounded-xl border border-indigo-500/30">
                          <div className="text-3xl mb-3">🏢</div>
                          <h4 className="text-indigo-300 font-semibold mb-2">3 Primary Verticals</h4>
                          <p className="text-slate-400 text-sm">Quantum Code, Cannabis Tech, Sustainable Living</p>
                        </div>
                        
                        <div className="bg-purple-500/20 p-6 rounded-xl border border-purple-500/30">
                          <div className="text-3xl mb-3">🌍</div>
                          <h4 className="text-purple-300 font-semibold mb-2">Global Impact</h4>
                          <p className="text-slate-400 text-sm">Spaces that educate, elevate, and empower</p>
                        </div>
                        
                        <div className="bg-pink-500/20 p-6 rounded-xl border border-pink-500/30">
                          <div className="text-3xl mb-3">♾️</div>
                          <h4 className="text-pink-300 font-semibold mb-2">Living System</h4>
                          <p className="text-slate-400 text-sm">Every layer feeds the next</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-8 rounded-xl border border-indigo-500/20">
                        <blockquote className="text-2xl font-semibold text-white italic">
                          "We don't just write algorithms. We write ecosystems."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Continuation Timeline Line (starts from bottom of Vision 2030) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30 h-32"
                 style={{ bottom: '-120px' }}></div>
            
            {/* Future Continuation Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                 style={{ bottom: '-160px' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900 opacity-60">
                <span className="text-white text-lg">...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 mt-40 bg-gradient-to-r from-slate-900/80 to-cyan-900/60 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us in Shaping the Future</h2>
          <p className="text-slate-300 text-xl mb-8">
            Be part of a revolutionary ecosystem that bridges technology, sustainability, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}