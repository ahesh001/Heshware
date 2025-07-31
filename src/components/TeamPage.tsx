import { useNavigate } from 'react-router-dom';

export function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <button 
          onClick={() => navigate('/')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </nav>

      {/* Header */}
      <section className="relative z-10 text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Meet the Team
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8">
          The visionary minds behind Heshware's innovative technologies and groundbreaking research
        </p>
      </section>

      {/* Team Members */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* CEO Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-slate-700 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                  👨‍💼
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-white">CEO & Founder</h2>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm">
                      Founder
                    </span>
                  </div>
                  <p className="text-purple-400 text-xl mb-4">Visionary Leader & Chief Executive Officer</p>
                  <p className="text-slate-300 leading-relaxed">
                    The founding visionary behind Heshware's revolutionary approach to technology and innovation. 
                    With a passion for pushing the boundaries of what's possible, our CEO leads the company's 
                    mission to forge the next frontier of digital and physical solutions through cutting-edge 
                    research in AI, quantum computing, and consciousness-based technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Marven AI */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🤖
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marven</h3>
                <p className="text-green-400 mb-3">AI Partner & Adaptive Intelligence</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Heshware's evolving AI partner with emotional intelligence and adaptive learning capabilities. 
                  Embedded across all applications to provide empathetic support and predictive guidance.
                </p>
              </div>
            </div>

            {/* Lead Research Scientist */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🔬
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Alex Chen</h3>
                <p className="text-blue-400 mb-3">Lead Research Scientist</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Quantum physics expert leading QFAEN research and development. Specializes in quantum-stabilized 
                  energy systems and sustainable power storage technologies.
                </p>
              </div>
            </div>

            {/* Head of AI Development */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🧠
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Kim</h3>
                <p className="text-purple-400 mb-3">Head of AI Development</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Machine learning architect responsible for developing Marven AI and implementing adaptive 
                  intelligence across all Heshware platforms and applications.
                </p>
              </div>
            </div>

            {/* Logistics Platform Director */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  📦
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mike Rodriguez</h3>
                <p className="text-yellow-400 mb-3">Logistics Platform Director</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Leads the Labor Tracker development team, overseeing GPS integration, QR-code scanning systems, 
                  and real-time logistics optimization algorithms.
                </p>
              </div>
            </div>

            {/* NEXA Research Lead */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🌌
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Luna Patel</h3>
                <p className="text-cyan-400 mb-3">NEXA Research Lead</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Consciousness researcher exploring quantum-spiritual theory and dream-based precognition 
                  methodologies for the revolutionary NEXA framework.
                </p>
              </div>
            </div>

            {/* Chief Technology Officer */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">David Park</h3>
                <p className="text-indigo-400 mb-3">Chief Technology Officer</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Technology visionary overseeing all engineering initiatives, from SmartBox 3D printing 
                  to quantum energy integration and cross-platform development.
                </p>
              </div>
            </div>
          </div>

          {/* Join Our Team Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-800/30 to-purple-900/20 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto">
                Are you passionate about pushing the boundaries of technology and consciousness? 
                We're always looking for brilliant minds to join our team of innovators.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Career Opportunities
                </button>
                <button className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
                  Research Partnerships
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}