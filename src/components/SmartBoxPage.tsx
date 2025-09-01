import { Link } from "react-router-dom";
import React from "react";
type NavigationFunction = (page: 'home' | 'contact' | 'learn-more' | 'labor-tracker' | 'smartbox' | 'nexa' | 'marven') => void;

interface SmartBoxPageProps {
  onNavigate: NavigationFunction;
}

export default function SmartBoxPage() {
  const onNavigate: NavigationFunction = (page) => {
    // Example: Use window.location or a router, but here just log for demo
    console.log(`Navigating to: ${page}`);
    // In a real app, you might use something like:
    // navigate(`/${page}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">📱</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
          SmartBox
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8">
          Quantum-stabilized energy storage solution engineered for enhanced security and efficiency
        </p>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Revolutionary Storage Technology</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              SmartBox represents a breakthrough in secure storage technology, engineered with our proprietary 
              quantum-stabilized capacitive energy theory. This next-generation solution combines enhanced security 
              protocols with ongoing research into sustainable alternative energy sources, creating a storage platform 
              that's both incredibly secure and environmentally conscious.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-300 font-semibold mb-2">Status</h4>
                <p className="text-white">Research Phase - 70% Complete</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-yellow-300 font-semibold mb-2">Energy Efficiency</h4>
                <p className="text-white">85% More Efficient</p>
              </div>
              <div className="bg-pink-500/20 p-4 rounded-lg border border-pink-500/30">
                <h4 className="text-pink-300 font-semibold mb-2">Security Level</h4>
                <p className="text-white">Quantum-Grade Encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">⚛️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum-Stabilized Energy Theory</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our proprietary quantum-stabilized capacitive energy theory enables unprecedented energy storage 
                density while maintaining perfect stability at the quantum level. This breakthrough allows for 
                virtually unlimited storage capacity with minimal energy loss.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-slate-300">99.97% Energy Retention</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-slate-300">Quantum-Level Stability</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-slate-300">Self-Healing Architecture</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Sustainable Energy Sources</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Extensive research into alternative energy sources powers SmartBox with completely renewable energy. 
                Our innovative approach combines solar, kinetic, and ambient energy harvesting with quantum storage 
                for a truly sustainable solution.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-slate-300">Solar Energy Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span className="text-slate-300">Kinetic Energy Harvesting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-slate-300">Ambient Energy Capture</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enhanced Security Protocols</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Multi-layered security architecture featuring quantum encryption, biometric access controls, 
                and AI-powered threat detection. SmartBox provides military-grade security for both physical 
                and digital assets.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-slate-300">Quantum Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="text-slate-300">Biometric Authentication</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-slate-300">AI Threat Detection</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Efficiency Optimization</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advanced algorithms continuously optimize energy flow and storage efficiency. Real-time monitoring 
                and predictive maintenance ensure peak performance while minimizing energy waste and operational costs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-slate-300">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-slate-300">Predictive Maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-slate-300">Auto-Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmartBox 2.0 Preview */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-purple-900/50 to-pink-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
            SmartBox 2.0: The Future
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-4xl mx-auto">
            Our next-generation SmartBox 2.0 will explore quantum energy research at unprecedented levels, 
            investigating sustainable power storage at the quantum level and pushing the boundaries of what's possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Level Storage</h3>
              <p className="text-slate-400">
                Storage capacity measured in quantum states rather than traditional metrics, enabling virtually unlimited data and energy storage.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero Energy Loss</h3>
              <p className="text-slate-400">
                Theoretical achievement of 100% energy retention through quantum entanglement and stabilization protocols.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Intelligence</h3>
              <p className="text-slate-400">
                AI that predicts energy needs and storage requirements before they occur, optimizing performance proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Current Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-slate-300">Energy Density</span>
                  <span className="text-purple-400 font-semibold">500 Wh/kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-slate-300">Charging Speed</span>
                  <span className="text-purple-400 font-semibold">0-100% in 30min</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-slate-300">Cycle Life</span>
                  <span className="text-purple-400 font-semibold">50,000+ cycles</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-slate-300">Operating Temperature</span>
                  <span className="text-purple-400 font-semibold">-40°C to 85°C</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-slate-300">Security Rating</span>
                  <span className="text-purple-400 font-semibold">Military Grade</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Efficiency</span>
                  <span className="text-purple-400 font-semibold">99.7%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Applications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Enterprise Solutions</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Data center backup power</li>
                    <li>• Critical infrastructure support</li>
                    <li>• Secure document storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">Consumer Applications</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Home energy storage</li>
                    <li>• Electric vehicle batteries</li>
                    <li>• Portable power solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Research & Development</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Quantum computing power</li>
                    <li>• Space exploration equipment</li>
                    <li>• Medical device applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Interested in SmartBox Technology?</h2>
          <p className="text-slate-300 text-xl mb-8">
            Join our research partnership program and be among the first to access SmartBox capabilities.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Join Research Program
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
              Technical Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}