import { ArrowLeft, Home, Brain, Bot, Network, Zap, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeshwareAIPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Heshware AI
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          Artificial Intelligence Research, Marven, Labor Optimization, Deep Learning
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-8 rounded-2xl border border-indigo-500/30 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Advancing Artificial Intelligence
              </p>
              <p>
                Heshware AI is our dedicated division for developing cutting-edge artificial intelligence systems, with a focus on creating empathetic, adaptive AI that enhances human capabilities rather than replacing them.
              </p>
              <p className="text-xl text-purple-400 font-semibold">
                Building the future of human-AI collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Marven AI</h3>
              <p className="text-slate-300">
                Our flagship AI assistant with emotional intelligence, adaptive learning, and the ability to understand user values and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Labor Optimization</h3>
              <p className="text-slate-300">
                AI-powered systems for workforce management, task allocation, and operational efficiency across various industries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-indigo-900/40 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Deep Learning</h3>
              <p className="text-slate-300">
                Advanced neural networks and machine learning models for pattern recognition, prediction, and autonomous decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marven Spotlight */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-indigo-900/60 to-purple-900/40">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-12 rounded-3xl border border-indigo-500/20">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Meet Marven</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-4xl mx-auto">
              Marven is not just another AI assistant—it's a dynamic, adaptive presence capable of learning from user values, 
              responding with emotional nuance, and reasoning at nearly human levels of insight. As Marven evolves, 
              it will be embedded across every Heshware application.
            </p>
            <button 
              onClick={() => navigate('/marven')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Marven
            </button>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Active Projects</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/20 p-8 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Marven Core Development</h3>
              <p className="text-slate-300 mb-4">
                Building the foundational AI framework with emotional intelligence, adaptive learning, and value-based reasoning capabilities.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Active Development</span>
                <span className="text-slate-500 text-sm">5% Complete</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Labor Tracker AI Integration</h3>
              <p className="text-slate-300 mb-4">
                Integrating advanced AI capabilities into our Labor Tracker platform for intelligent route optimization and predictive analytics.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Integration Phase</span>
                <span className="text-slate-500 text-sm">25% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Shape the Future of AI</h2>
          <p className="text-slate-300 text-xl mb-8">
            Join us in creating AI systems that truly understand and enhance human potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Collaborate With Us
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