import { ArrowLeft, Home, Zap, Battery, Sun, Wind, Recycle, Atom } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeshwareEnergyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-black relative overflow-hidden">
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

      {/* Header */}
      <section className="relative z-10 text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
          Heshware Energy
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          QFAEN Technology & Renewable Systems
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-8 rounded-2xl border border-yellow-500/30 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Powering the Future
              </p>
              <p>
                Heshware Energy focuses on revolutionary energy storage and generation technologies, including our groundbreaking QFAEN (Quantum-Stabilized Capacitive Energy Nodes) research and sustainable power solutions.
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                Where quantum meets sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Energy Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">QFAEN Technology</h3>
              <p className="text-slate-300">
                Quantum-Stabilized Capacitive Energy Nodes that revolutionize energy storage through quantum mechanics principles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Solar Integration</h3>
              <p className="text-slate-300">
                Advanced solar energy harvesting and storage systems integrated with our quantum energy technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 p-8 rounded-2xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Energy Storage</h3>
              <p className="text-slate-300">
                Next-generation energy storage solutions that provide higher capacity, faster charging, and longer lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QFAEN Spotlight */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-yellow-900/60 to-orange-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">QFAEN Revolution</h2>
              <p className="text-slate-300 text-lg mb-6">
                Quantum-Stabilized Capacitive Energy Nodes represent a breakthrough in energy storage technology, 
                utilizing quantum field manipulation to achieve unprecedented energy density and stability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Quantum-stabilized energy storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Ultra-high energy density</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Minimal energy loss over time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-300">Environmentally sustainable</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/qfaen')}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore QFAEN
              </button>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-500/20">
              <div className="text-center">
                <Atom className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Quantum Energy</h3>
                <p className="text-slate-300">
                  Harnessing quantum mechanical properties to create energy storage systems that exceed 
                  the limitations of conventional battery technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewable Systems */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Renewable Energy Systems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-8 rounded-2xl border border-yellow-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-yellow-400">Solar Harvesting</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Advanced photovoltaic systems integrated with QFAEN storage for maximum energy capture and retention.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Development</span>
                <span className="text-slate-500 text-sm">15% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-orange-400">Energy Recovery</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Innovative systems for capturing and converting waste energy from various sources into usable power.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Research</span>
                <span className="text-slate-500 text-sm">8% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-yellow-900/40 to-orange-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Active Research</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/20">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">QFAEN Prototype Development</h3>
              <p className="text-slate-300 mb-4">
                Building the first functional prototypes of Quantum-Stabilized Capacitive Energy Nodes for testing and validation.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Early Research</span>
                <span className="text-slate-500 text-sm">1% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/20 p-8 rounded-2xl border border-orange-500/20">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">SmartBox Energy Integration</h3>
              <p className="text-slate-300 mb-4">
                Integrating advanced energy harvesting and storage capabilities into our SmartBox logistics platform.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Planning Phase</span>
                <span className="text-slate-500 text-sm">5% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Energize the Future</h2>
          <p className="text-slate-300 text-xl mb-8">
            Join us in developing the next generation of energy technologies that will power a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Research Partnership
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Meet Our Scientists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}