import { ArrowLeft, Home, Cpu, Zap, Atom, Binary, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeshwareQuantumPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Cpu className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Heshware Quantum
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          Quantum Systems & Software Development
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 p-8 rounded-2xl border border-blue-500/30 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Pioneering the Quantum Future
              </p>
              <p>
                Heshware Quantum represents our commitment to advancing quantum computing technologies and developing next-generation software systems that harness the power of quantum mechanics.
              </p>
              <p className="text-xl text-cyan-400 font-semibold">
                Where classical computing meets quantum possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Key Research Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Quantum Computing</h3>
              <p className="text-slate-300">
                Developing quantum algorithms and computational frameworks that leverage superposition and entanglement for exponential processing advantages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Binary className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quantum Software</h3>
              <p className="text-slate-300">
                Creating software development tools and frameworks optimized for quantum computing environments and hybrid classical-quantum systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">System Integration</h3>
              <p className="text-slate-300">
                Bridging quantum and classical computing systems to create seamless, practical applications for real-world problem solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-slate-900/80 to-blue-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Current Initiatives</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Quantum Algorithm Research</h3>
              <p className="text-slate-300 mb-4">
                Developing proprietary quantum algorithms for optimization problems, machine learning, and cryptographic applications.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Research Phase</span>
                <span className="text-slate-500 text-sm">15% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Quantum Development Platform</h3>
              <p className="text-slate-300 mb-4">
                Building a comprehensive development environment for quantum software engineering with simulation capabilities.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Early Development</span>
                <span className="text-slate-500 text-sm">8% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Quantum Revolution</h2>
          <p className="text-slate-300 text-xl mb-8">
            Collaborate with us as we push the boundaries of what's possible with quantum technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
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