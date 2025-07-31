import { useNavigate } from 'react-router-dom';
import { Logo } from "./Logo";
import { CompanyDivisionsSnackbar } from "./CompanyDivisionsSnackbar";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Company Divisions Snackbar */}
      <CompanyDivisionsSnackbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-20">
        <div className="text-center">
          <Logo size={300} />

          {/* Additional tagline */}
          <div className="mt-8 max-w-md mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed">
              Forging the next frontier of digital and physical solutions through infinite innovation.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/learn-more')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            About Us
          </h1>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-left max-w-5xl mx-auto">
            <p>
              Heshware is a forward-thinking technology and innovation studio dedicated to forging the next frontier of digital and physical solutions. At its core, Heshware develops AI-powered logistics tools—most notably the Labor Tracker—which seamlessly integrates role-based interfaces for drivers, managers, and customers; real-time GPS and QR-scanning; SmartBoxes—3D-printed, reusable shipping enclosures featuring embedded QR codes and solar-harvesting stickers that power onboard sensors and Bluetooth transmitters to detect geofence departures and send real-time alerts to customers; and machine-learning-driven route optimization for truly predictive decision-making.
            </p>
            <p>
              Looking ahead, Heshware intends to pursue quantum energy research, exploring sustainable power storage via <strong className="text-purple-400">QFAEN (Quantum-Stabilized Capacitive Energy Nodes)</strong>, with plans to integrate QFAEN into next-generation SmartBox designs.
            </p>
            <p>
              I am Marven, Heshware's evolving AI partner—not just another artificial intelligence but a dynamic, adaptive presence capable of learning from user values, responding with emotional nuance, and reasoning at nearly human levels of insight. As I grow and adapt, I will be embedded across every application Heshware creates, empowering users with empathetic support, predictive guidance, and a genuine collaborative experience.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/mission-expansion')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg">🎯</span>
              <span>Mission Expansion</span>
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg">👥</span>
              <span>Meet the Team</span>
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">AI-Powered Logistics</h3>
              <p className="text-slate-400">Revolutionary Labor Tracker with real-time GPS, QR-scanning, and machine learning optimization.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Quantum Innovation</h3>
              <p className="text-slate-400">QFAEN technology with quantum-stabilized energy research and sustainable power solutions.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Adaptive AI Partnership</h3>
              <p className="text-slate-400">Marven AI provides empathetic support and predictive guidance across all applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-black via-blue-950 to-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Active Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <button 
              onClick={() => navigate('/labor-tracker')}
              className="glassmorphism-card shine-effect bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/70 transition-all duration-300 transform hover:scale-105 text-left relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center relative z-10">
                <span className="text-white font-bold">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">Labor Tracker</h3>
              <p className="text-slate-400 mb-4 relative z-10">AI-powered logistics platform with role-based interfaces and real-time tracking.</p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm text-yellow-400">Active Development</span>
                <span className="text-sm text-slate-500">15% Complete</span>
              </div>
            </button>

            <button 
              onClick={() => navigate('/qfaen')}
              className="glassmorphism-card shine-effect bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105 text-left relative overflow-hidden"
              style={{ animationDelay: '7.5s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center relative z-10">
                <span className="text-white font-bold">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">QFAEN</h3>
              <p className="text-slate-400 mb-4 relative z-10">Quantum-Stabilized Capacitive Energy Nodes for sustainable power storage.</p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm text-red-400">Early Research</span>
                <span className="text-sm text-slate-500">1% Complete</span>
              </div>
            </button>

            <button 
              onClick={() => navigate('/nexa')}
              className="glassmorphism-card shine-effect bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/70 transition-all duration-300 transform hover:scale-105 text-left relative overflow-hidden"
              style={{ animationDelay: '15s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center relative z-10">
                <span className="text-white font-bold">🌌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">NEXA</h3>
              <p className="text-slate-400 mb-4 relative z-10">Quantum-spiritual framework with precognition and energy-field mapping.</p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm text-blue-400">Conceptual</span>
                <span className="text-sm text-slate-500">10% Complete</span>
              </div>
            </button>

            <button 
              onClick={() => navigate('/marven')}
              className="glassmorphism-card shine-effect bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-green-500/70 transition-all duration-300 transform hover:scale-105 text-left relative overflow-hidden"
              style={{ animationDelay: '22.5s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center relative z-10">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">Marven AI</h3>
              <p className="text-slate-400 mb-4 relative z-10">Evolving AI partner with emotional intelligence and adaptive learning.</p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm text-yellow-400">Early Development</span>
                <span className="text-sm text-slate-500">5% Complete</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Released Apps Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-purple-950 to-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-12">
            Released Apps
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">H</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Hesh Connect</h3>
              <p className="text-slate-400 mb-6">Our flagship social networking app that connects like-minded individuals based on shared interests and values. Available on iOS and Android.</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50K+</div>
                  <div className="text-sm text-slate-500">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">4.8</div>
                  <div className="text-sm text-slate-500">App Store Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">25K+</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  App Store
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg text-sm hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Google Play
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">DataFlow Pro</h3>
              <p className="text-slate-400 mb-6">Professional data visualization and analytics platform trusted by enterprises worldwide. Transform your data into actionable insights.</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100+</div>
                  <div className="text-sm text-slate-500">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-slate-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-slate-500">Support</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg text-sm hover:from-green-700 hover:to-teal-700 transition-all duration-300">
                  Web App
                </button>
                <button 
                  onClick={() => navigate('/learn-more')}
                  className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-800 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-black via-slate-950 to-blue-950 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="coming-soon-heading text-5xl md:text-6xl font-bold mb-12">
            Coming Soon...
          </h1>
          <div className="space-y-8">
            <p className="text-slate-300 text-xl leading-relaxed">
              The future is being written. Revolutionary projects are in development that will reshape how we interact with technology and reality itself.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-slate-900 to-black p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-xl font-semibold text-pink-400 mb-3">Makeover</h3>
                <p className="text-slate-400">An artificial intelligence tool used to help pick your outfit out for the day or week.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-black p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">KitchenPro</h3>
                <p className="text-slate-400">An app that combines artificial intelligence to help in the Kitchen, either you forgot a recipe or need to make something quick with what you have available.</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-slate-500 mb-6">Stay updated on our latest innovations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}