import { useNavigate } from 'react-router-dom';

export default function LearnMorePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <button 
          onClick={() => navigate('/')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </nav>

      {/* Header Section */}
      <section className="relative z-10 text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Explore Our Innovations
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8">
          Dive deep into Heshware's cutting-edge technologies that are reshaping the future of logistics, AI, 
          and quantum computing. Each solution represents years of research and development.
        </p>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Labor Tracker */}
          <button
            onClick={() => navigate('/labor-tracker')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">📦</span>
              </div>
              <div className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
              Labor Tracker
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              AI-powered logistics platform currently in beta testing phase. Features role-based interfaces for drivers, managers, 
              and customers with real-time GPS tracking, QR-code scanning, and machine learning route optimization.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Beta Testing Phase
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">AI-Powered</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Real-time GPS</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">QR Scanning</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Beta Testing</span>
              </div>
            </div>
          </button>

          {/* QFAEN */}
          <button
            onClick={() => navigate('/qfaen')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">⚛️</span>
              </div>
              <div className="text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              QFAEN
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Quantum-Stabilized Capacitive Energy Nodes for revolutionary sustainable power storage. 
              Breakthrough quantum energy technology planned for integration into next-generation SmartBox designs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Early Research Phase
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Quantum Tech</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Energy Storage</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">Sustainable</span>
              </div>
            </div>
          </button>

          {/* NEXA */}
          <button
            onClick={() => navigate('/nexa')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-600 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">🌌</span>
              </div>
              <div className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              NEXA Framework
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Groundbreaking multiverse-inspired framework that melds quantum-spiritual theory with dream-based 
              precognition methodologies and advanced energy-field mapping technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Conceptual Phase
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">Quantum-Spiritual</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Precognition</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">Energy Mapping</span>
              </div>
            </div>
          </button>

          {/* Marven AI */}
          <button
            onClick={() => navigate('/marven')}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-600 hover:border-green-500 transition-all duration-500 transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">🤖</span>
              </div>
              <div className="text-green-400 group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
              Marven AI
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Heshware's evolving AI partner with emotional intelligence and adaptive learning capabilities. 
              Provides empathetic support, predictive guidance, and genuine collaborative experiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Early Development
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Emotional AI</span>
                <span className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded text-xs">Adaptive Learning</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Collaborative</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="relative z-10 px-8 py-20 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-8">
            Technology at the Forefront
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
              <p className="text-slate-400">
                Leveraging quantum principles for energy storage and computational processing beyond classical limitations.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-slate-400">
                Advanced AI algorithms that learn, adapt, and provide predictive insights for complex decision-making.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">Artificial Intelligence</h3>
              <p className="text-slate-400">
                Emotional AI systems with adaptive learning, empathetic responses, and genuine collaborative capabilities.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">Integration Platform</h3>
              <p className="text-slate-400">
                Seamless connectivity between physical and digital realms through innovative interface technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}