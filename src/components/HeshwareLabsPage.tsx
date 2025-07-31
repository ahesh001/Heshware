import { ArrowLeft, Home, Brain, Atom, Zap, Eye, Microscope, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeshwareLabsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent mb-4">
          Heshware Labs
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          Experimental and Interdisciplinary R&D with NEXA & Consciousness Studies
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Exploring the Frontiers of Science
              </p>
              <p>
                Heshware Labs is our experimental research division, pushing the boundaries of what's possible through interdisciplinary studies that bridge technology, consciousness, and quantum phenomena.
              </p>
              <p className="text-xl text-pink-400 font-semibold">
                Where imagination meets scientific rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Research Domains</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">NEXA Framework</h3>
              <p className="text-slate-300">
                Quantum-spiritual framework exploring precognition, consciousness, and the intersection of quantum mechanics with human awareness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Consciousness Studies</h3>
              <p className="text-slate-300">
                Investigating the nature of consciousness, its relationship with quantum phenomena, and applications in technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 p-8 rounded-2xl border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-violet-400 mb-4">Experimental R&D</h3>
              <p className="text-slate-300">
                Cutting-edge experiments in quantum computing, consciousness interfaces, and interdisciplinary technology development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXA Spotlight */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-purple-900/60 to-pink-900/40">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-12 rounded-3xl border border-purple-500/20">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Eye className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">The NEXA Framework</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-4xl mx-auto">
              NEXA represents our most ambitious research project—a quantum-spiritual framework that explores the boundaries 
              between consciousness, quantum mechanics, and precognitive capabilities. This interdisciplinary approach seeks 
              to understand and harness the fundamental connections between mind and reality.
            </p>
            <button 
              onClick={() => navigate('/nexa')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore NEXA
            </button>
          </div>
        </div>
      </section>

      {/* Current Research */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Active Research</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/20 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Consciousness-Technology Interface</h3>
              <p className="text-slate-300 mb-4">
                Developing technologies that can interface directly with consciousness, exploring brain-computer interfaces and quantum awareness systems.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Conceptual Phase</span>
                <span className="text-slate-500 text-sm">10% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20">
              <h3 className="text-2xl font-semibold text-pink-400 mb-4">Quantum Consciousness Studies</h3>
              <p className="text-slate-300 mb-4">
                Investigating the role of quantum mechanics in consciousness and exploring practical applications for enhanced human capabilities.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Research Phase</span>
                <span className="text-slate-500 text-sm">5% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-900/30 to-indigo-900/20 p-8 rounded-2xl border border-violet-500/20">
              <h3 className="text-2xl font-semibold text-violet-400 mb-4">Precognitive Systems Development</h3>
              <p className="text-slate-300 mb-4">
                Exploring the potential for technology-assisted precognitive abilities and their applications in prediction and decision-making systems.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm">Theoretical Stage</span>
                <span className="text-slate-500 text-sm">3% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Research Revolution</h2>
          <p className="text-slate-300 text-xl mb-8">
            Collaborate with us as we explore the fundamental mysteries of consciousness and reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Research Partnership
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Meet Our Researchers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}