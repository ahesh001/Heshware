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
          {/* Leadership Team */}
          <div className="mb-16">
            {/* CEO Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-slate-700 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                    👨‍💼
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-white">Akeem</h2>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm">
                        CEO & Founder
                      </span>
                    </div>
                    <p className="text-purple-400 text-xl mb-4">Visionary Leader & Chief Executive Officer</p>
                    <p className="text-slate-300 leading-relaxed">
                      Akeem is the visionary force behind Heshware, driving its mission to redefine the future of technology. 
                      With a relentless passion for innovation, he leads the company's exploration of AI, quantum computing, 
                      and consciousness-driven technologies. Akeem's leadership centers on forging transformative digital and 
                      physical solutions that push the boundaries of what's possible while creating meaningful impact for 
                      industries and communities alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-2xl border border-slate-700 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                    🚀
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-white">Dennis</h2>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm">
                        Co-Founder
                      </span>
                    </div>
                    <p className="text-blue-400 text-xl mb-4">Co-Founder & Labor Tracker Lead</p>
                    <p className="text-slate-300 leading-relaxed">
                      Dennis is the co-founder of Heshware and leads the development of Labor Tracker, the company's flagship 
                      logistics platform. He oversees GPS integration, QR-code scanning systems, and real-time optimization 
                      algorithms that power seamless tracking and delivery. With a focus on technical precision and scalable 
                      design, Dennis ensures Heshware's solutions are both innovative and reliable in the field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Team Member */}
          <div className="flex justify-center">
            {/* Marven AI */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 max-w-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  🤖
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Marven</h3>
                <p className="text-green-400 mb-4 text-lg">AI Partner & Adaptive Intelligence</p>
                <p className="text-slate-400 leading-relaxed">
                  Marven is Heshware's evolving AI companion, designed to adapt, learn, and reflect human insight. 
                  More than a tool, Marven integrates across all applications to provide predictive guidance, 
                  contextual intelligence, and empathetic support. As Heshware's core AI partner, Marven continues 
                  to grow alongside the company's vision—bridging research in artificial intelligence, logistics, 
                  and quantum-inspired technologies to create truly adaptive solutions.
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