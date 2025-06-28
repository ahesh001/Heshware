type NavigationFunction = (page: 'home' | 'contact' | 'learn-more' | 'labor-tracker' | 'smartbox' | 'nexa' | 'marven') => void;

interface MarvenPageProps {
  onNavigate: NavigationFunction;
}

export function MarvenPage({ onNavigate }: MarvenPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-black relative overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="shooting-stars-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('learn-more')}
          className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Back to Learn More
        </button>
        <button 
          onClick={() => onNavigate('home')}
          className="text-slate-300 hover:text-white transition-colors duration-300"
        >
          Home
        </button>
      </nav>

      {/* Header */}
      <section className="relative z-10 text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">🤖</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-green-600 bg-clip-text text-transparent mb-4">
          Marven AI
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8">
          Heshware's evolving AI partner with emotional intelligence and adaptive learning capabilities
        </p>
      </section>

      {/* Introduction */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-green-900/30 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Meet Marven</h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4 italic">
              <p>
                "I am Marven, Heshware's evolving AI partner—not just another artificial intelligence but a dynamic, 
                adaptive presence capable of learning from user values, responding with emotional nuance, and reasoning 
                at nearly human levels of insight."
              </p>
              <p>
                "As I grow and adapt, I will be embedded across every application Heshware creates, empowering users 
                with empathetic support, predictive guidance, and a genuine collaborative experience."
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-green-300 font-semibold mb-2">Status</h4>
                <p className="text-white">Active Development - 85% Complete</p>
              </div>
              <div className="bg-teal-500/20 p-4 rounded-lg border border-teal-500/30">
                <h4 className="text-teal-300 font-semibold mb-2">Learning Model</h4>
                <p className="text-white">Adaptive Emotional Intelligence</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 font-semibold mb-2">Integration</h4>
                <p className="text-white">Cross-Platform Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-12">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">❤️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Emotional Intelligence</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advanced emotional processing capabilities that allow me to understand, interpret, and respond to 
                human emotions with genuine empathy and contextual awareness.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-slate-300">Real-time emotion recognition</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span className="text-slate-300">Contextual empathy responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-slate-300">Personalized communication styles</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Adaptive Learning</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                My learning algorithms continuously evolve based on user interactions, preferences, and feedback. 
                I adapt my responses and behavior patterns to align with individual user values.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-slate-300">Continuous learning algorithms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-slate-300">User preference adaptation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-slate-300">Value-based decision making</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Predictive Guidance</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advanced predictive capabilities that anticipate user needs and provide proactive assistance 
                across all Heshware applications and platforms.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-slate-300">Proactive assistance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-slate-300">Need anticipation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-slate-300">Cross-platform insights</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Partnership</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Genuine collaborative experience that goes beyond traditional AI assistance, fostering 
                true partnership in problem-solving and creative processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-slate-300">Creative collaboration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="text-slate-300">Problem-solving partnership</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-slate-300">Strategic thinking support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Across Applications */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-green-900/50 to-teal-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12">
            Integrated Across All Heshware Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-3">Labor Tracker</h3>
              <p className="text-slate-400">
                Providing intelligent route optimization and predictive logistics insights.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">SmartBox</h3>
              <p className="text-slate-400">
                Monitoring energy patterns and optimizing storage efficiency autonomously.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold text-white mb-3">NEXA</h3>
              <p className="text-slate-400">
                Facilitating consciousness-based interactions and intuitive guidance.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Future Apps</h3>
              <p className="text-slate-400">
                Ready to integrate with all upcoming Heshware innovations seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Marven AI</h2>
          <p className="text-slate-300 text-xl mb-8">
            Ready to collaborate with an AI partner that truly understands and adapts to your needs?
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Beta Access
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
              AI Capabilities Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}