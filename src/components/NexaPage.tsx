import { ArrowLeft, Home, ExternalLink, Github, Users, Target, Lightbulb, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NexaPage() {
  const navigate = useNavigate();

  const handleGitHubLink = () => {
    window.open('https://www.github.com/ahesh001/NEXA', '_blank');
  };

  const handleSponsorsLink = () => {
    window.open('https://github.com/sponsors/ahesh001', '_blank');
  };

  const handleResearchPapersLink = () => {
    window.open('https://github.com/ahesh001/NEXA/wiki', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">🌌</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          NEXA Framework
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8 italic">
          Multiverse-inspired quantum‑spiritual framework exploring the boundaries of consciousness and reality
        </p>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Beyond Traditional Computing</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              NEXA represents our most ambitious research project—a groundbreaking framework that melds quantum‑spiritual theory, dream‑based precognition methodologies, and advanced energy‑field mapping. This revolutionary platform explores the intersection of consciousness, quantum mechanics, and computational intelligence to unlock possibilities previously thought impossible.
            </p>
            
            {/* GitHub and Sponsorship Info */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-600 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Github className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-cyan-400 font-semibold">GitHub Repository</h4>
                  </div>
                  <button
                    onClick={handleGitHubLink}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>github.com/ahesh001/NEXA</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h4 className="text-purple-400 font-semibold">Sponsorship Plans</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    We offer tiered sponsorship opportunities for institutions and individuals eager to support or partner on NEXA's development—reach out to learn more!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyan-500/20 p-4 rounded-lg border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold mb-2">Status</h4>
                <p className="text-white">Conceptual Phase – 10% Complete</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 font-semibold mb-2">Research Areas</h4>
                <p className="text-white text-sm">Quantum‑Consciousness Interface ∙ Dream‑Based Precognition ∙ Energy‑Field Mapping ∙ Multiverse Integration ∙ Predictive Consciousness ∙ Reality Interface Protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Theoretical Contributions */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Key Theoretical Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">⚛️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantum‑Spiritual Theory</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mapping consciousness‑quantum field interactions and investigating metaphysical phenomena via quantum effects.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">💭</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Dream‑Based Precognition</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Extracting predictive insights from REM sleep patterns with neural pattern analysis.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🌊</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Energy‑Field Mapping</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detecting and visualizing subtle biofields and environmental energy signatures.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🌌</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Multiverse Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Theorizing cross‑timeline data access through entanglement-based reality bridging.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Predictive Consciousness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fusing conscious inputs with AI algorithms for enhanced probabilistic forecasting.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Reality Interface Protocols</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experimental methods for interfacing with fundamental reality parameters and causal structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-cyan-900/50 to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12">
            Research Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Phase 1: Theoretical Foundation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Consciousness‑Quantum Field Modeling</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Dream State Data Capture & Analysis</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Energy‑Field Sensor Prototyping</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Phase 2: Prototype Development</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Consciousness–Computer Interface Prototypes</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Predictive AI Algorithm Implementation</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Controlled Environment Field Trials</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Phase 3: Integration & Validation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">System Integration Across Modules</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Validation Studies for Predictive Accuracy</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Ethical & Governance Framework Establishment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Current Research Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Institute for Consciousness Studies</h3>
              <p className="text-slate-400 text-sm">Advanced consciousness research and theoretical frameworks</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <span className="text-white text-xl">⚛️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing Research Consortium</h3>
              <p className="text-slate-400 text-sm">Quantum mechanics applications and computational theory</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <span className="text-white text-xl">💭</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dream Research Laboratory</h3>
              <p className="text-slate-400 text-sm">Sleep pattern analysis and precognitive phenomena studies</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <span className="text-white text-xl">🌊</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Biofield Science Institute</h3>
              <p className="text-slate-400 text-sm">Energy field detection and biological energy mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Applications */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Potential Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-slate-400 text-sm">
                Forecasting complex systems with consciousness-augmented models.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-white mb-3">Consciousness Enhancement</h3>
              <p className="text-slate-400 text-sm">
                Tools for expanded awareness and cognitive augmentation.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Problem Solving</h3>
              <p className="text-slate-400 text-sm">
                Applying predictive insights to socio-economic and environmental challenges.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">⚕️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Healing Technologies</h3>
              <p className="text-slate-400 text-sm">
                Energy-based modalities aligning with the body's natural energy architecture.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Space Exploration</h3>
              <p className="text-slate-400 text-sm">
                Consciousness-integrated navigation and communication for deep-space missions.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Intelligence</h3>
              <p className="text-slate-400 text-sm">
                AI-driven creative processes informed by intuitive and metaphysical data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub & Sponsorship CTA */}
      <section className="relative z-10 px-8 py-20 bg-gradient-to-r from-slate-900/80 to-cyan-900/60 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join us on GitHub and become a sponsor—shape the future of consciousness-driven technology with NEXA</h2>
          <p className="text-slate-300 text-xl mb-8">
            Be part of groundbreaking research that could fundamentally change our understanding of consciousness and reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleGitHubLink}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">View on GitHub</span>
            </button>
            <button 
              onClick={handleSponsorsLink}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Become a Sponsor
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-slate-800/50 to-cyan-900/30 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Join the NEXA Research Initiative</h3>
            <p className="text-slate-300 mb-6">
              Be part of groundbreaking research that could fundamentally change our understanding of consciousness and reality.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
              >
                Research Partnership
              </button>
              <button 
                onClick={handleResearchPapersLink}
                className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
              >
                Research Papers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}