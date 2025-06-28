type NavigationFunction = (page: 'home' | 'contact' | 'learn-more' | 'labor-tracker' | 'smartbox' | 'nexa' | 'marven') => void;

interface LaborTrackerPageProps {
  onNavigate: NavigationFunction;
}

export function LaborTrackerPage({ onNavigate }: LaborTrackerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">📦</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
          Labor Tracker
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8">
          Revolutionary AI-powered logistics platform transforming the delivery and transportation industry
        </p>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Platform Overview</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Labor Tracker represents a paradigm shift in logistics management, seamlessly integrating role-based interfaces 
              for drivers, managers, and customers. Our platform combines real-time GPS tracking, QR-code scanning technology, 
              and machine learning-driven route optimization to deliver truly predictive decision-making capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-300 font-semibold mb-2">Status</h4>
                <p className="text-white">Production Ready - 95% Complete</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-green-300 font-semibold mb-2">Users</h4>
                <p className="text-white">50K+ Active Users</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-300 font-semibold mb-2">Efficiency</h4>
                <p className="text-white">40% Route Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time GPS Tracking</h3>
              <p className="text-slate-400 mb-4">
                Precision location tracking with sub-meter accuracy, providing real-time visibility into vehicle locations, 
                route progress, and delivery status updates.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Sub-meter GPS accuracy</li>
                <li>• Live route visualization</li>
                <li>• Geofencing capabilities</li>
                <li>• Historical tracking data</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">QR Code Integration</h3>
              <p className="text-slate-400 mb-4">
                Advanced QR scanning system for package verification, delivery confirmation, and seamless data capture 
                throughout the logistics chain.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Instant package verification</li>
                <li>• Digital delivery confirmation</li>
                <li>• Damage reporting integration</li>
                <li>• Chain of custody tracking</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Route Optimization</h3>
              <p className="text-slate-400 mb-4">
                Machine learning algorithms analyze traffic patterns, delivery history, and real-time conditions to 
                optimize routes and predict delivery times with 95% accuracy.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Dynamic route recalculation</li>
                <li>• Traffic pattern analysis</li>
                <li>• Fuel efficiency optimization</li>
                <li>• Predictive delivery windows</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Role-Based Interfaces</h3>
              <p className="text-slate-400 mb-4">
                Customized dashboards and interfaces for drivers, managers, and customers, each optimized for their 
                specific needs and responsibilities.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Driver mobile interface</li>
                <li>• Manager analytics dashboard</li>
                <li>• Customer tracking portal</li>
                <li>• Admin control panel</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
              <p className="text-slate-400 mb-4">
                Comprehensive analytics platform providing actionable insights into fleet performance, driver efficiency, 
                and operational optimization opportunities.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Performance metrics dashboard</li>
                <li>• Predictive analytics</li>
                <li>• Cost optimization reports</li>
                <li>• Customer satisfaction tracking</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
              <p className="text-slate-400 mb-4">
                Enterprise-grade security with end-to-end encryption, compliance monitoring, and audit trails for 
                complete data protection and regulatory adherence.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• End-to-end encryption</li>
                <li>• Compliance monitoring</li>
                <li>• Audit trail logging</li>
                <li>• Access control management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">System Architecture</h3>
                <div className="space-y-3 text-slate-300">
                  <p><strong className="text-blue-400">Frontend:</strong> React Native (Mobile), React.js (Web)</p>
                  <p><strong className="text-green-400">Backend:</strong> Node.js with Express, PostgreSQL</p>
                  <p><strong className="text-purple-400">AI/ML:</strong> TensorFlow, Python, Real-time Analytics</p>
                  <p><strong className="text-yellow-400">Infrastructure:</strong> AWS Cloud, Kubernetes, Docker</p>
                  <p><strong className="text-cyan-400">APIs:</strong> RESTful APIs, GraphQL, WebSocket connections</p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-slate-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">&lt;100ms</div>
                    <div className="text-sm text-slate-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">50K+</div>
                    <div className="text-sm text-slate-400">Concurrent Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">1M+</div>
                    <div className="text-sm text-slate-400">Daily Transactions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">Integration Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">ERP Systems (SAP, Oracle, Microsoft)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Fleet Management Systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">Customer Relationship Management (CRM)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300">Warehouse Management Systems (WMS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Payment Processing Platforms</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">Use Cases</h3>
                <div className="space-y-3 text-slate-300">
                  <p>• <strong>E-commerce Delivery:</strong> Last-mile delivery optimization</p>
                  <p>• <strong>Fleet Management:</strong> Commercial vehicle tracking</p>
                  <p>• <strong>Supply Chain:</strong> End-to-end logistics visibility</p>
                  <p>• <strong>Field Services:</strong> Service technician routing</p>
                  <p>• <strong>Food Delivery:</strong> Temperature-controlled transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-slate-300 text-xl mb-8">
            Join thousands of companies already using Labor Tracker to optimize their delivery operations.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}