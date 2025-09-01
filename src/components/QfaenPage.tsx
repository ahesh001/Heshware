import { Download, FileText } from "lucide-react";

type NavigationFunction = (page: 'home' | 'contact' | 'learn-more' | 'labor-tracker' | 'qfaen' | 'nexa' | 'marven' | 'team') => void;

interface QfaenPageProps {
  onNavigate: NavigationFunction;
}

export default function QfaenPage() {
  const handleDownloadWhitePaper = () => {
    // In a real application, this would download the actual PDF
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = '#'; // This would be the actual PDF URL
    link.download = 'QFAEN-White-Paper-Heshware-2025.pdf';
    link.click();
    
    // Show a toast or notification that the download started
    alert('QFAEN White Paper download initiated!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden">
      {/* Header */}
      <section className="relative z-10 text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">⚛️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
          QFAEN
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto px-8 mb-2 italic">
          Quantum‑Stabilized Capacitive Energy Nodes
        </p>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto px-8 italic">
          Revolutionary quantum energy storage technology for sustainable power solutions
        </p>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Breakthrough Energy Technology</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              QFAEN represents Heshware's most ambitious research effort in sustainable power storage. By applying quantum mechanics to capacitive systems, we aim to develop energy nodes capable of storing and releasing power with unparalleled efficiency, stability, and miniaturization. <strong className="text-purple-400">QFAEN will serve as the core power source for next‑generation SmartBox designs</strong>, transforming the landscape of portable and resilient energy solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                <h4 className="text-purple-300 font-semibold mb-2">Status</h4>
                <p className="text-white">Early Research – 1% Complete</p>
              </div>
              <div className="bg-pink-500/20 p-4 rounded-lg border border-pink-500/30">
                <h4 className="text-pink-300 font-semibold mb-2">Projected Energy Density</h4>
                <p className="text-white">10,000× conventional capacitors</p>
              </div>
              <div className="bg-indigo-500/20 p-4 rounded-lg border border-indigo-500/30">
                <h4 className="text-indigo-300 font-semibold mb-2">Applications</h4>
                <p className="text-white">Unlimited — from logistics devices to grid‑scale storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Core Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">⚛️</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Stabilization</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Maintaining quantum coherence in energy storage through advanced error‑correction protocols</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Preventing decoherence and energy leakage at ambient conditions</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Isolating and controlling energy eigenstates for repeatable performance</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🔋</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Capacitive Energy Storage</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Embedding quantum effects into high‑density capacitors for extreme power density</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Achieving rapid charge/discharge cycles without degradation</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Enabling ultra‑compact form factors for embedded and portable systems</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Sustainable Integration</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Designing QFAEN modules to interface seamlessly with solar, wind, and other renewable sources</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Ensuring compatibility with existing electrical grids and micro‑grids</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Minimizing environmental impact through recyclable materials and low‑waste fabrication</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">📱</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">SmartBox Integration</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Embedding QFAEN modules into the next generation of SmartBoxes for self‑powered tracking</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Extending operational life of onboard sensors and Bluetooth transmitters</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Enabling wireless power transfer to peripheral IoT devices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Challenges */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-purple-900/50 to-pink-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12">
            Current Research Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Decoherence</h3>
              <p className="text-slate-400">
                Achieving stable quantum states at room temperature and preventing energy loss through environmental interactions.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
              <p className="text-slate-400">
                Developing manufacturing processes that transition QFAEN from laboratory prototypes to mass production.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Energy Transfer</h3>
              <p className="text-slate-400">
                Creating efficient interfaces between QFAEN modules and conventional electronics for seamless power delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Applications */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Future Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-white mb-3">Electric Vehicles</h3>
              <p className="text-slate-400 text-sm">
                Instant charging and extended range with lightweight, compact modules.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Home Energy</h3>
              <p className="text-slate-400 text-sm">
                Decades‑long backup power in a small footprint for residential and commercial use.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Space Exploration</h3>
              <p className="text-slate-400 text-sm">
                Reliable, long‑duration energy sources for deep‑space missions and satellites.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-white mb-3">High‑Performance & Quantum Computing</h3>
              <p className="text-slate-400 text-sm">
                Dedicated power supplies to support next‑gen data centers and quantum processors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section className="relative z-10 px-8 py-20 bg-gradient-to-r from-slate-900/80 to-purple-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">📄 White Paper Document</h2>
                <p className="text-slate-300">
                  Below is the comprehensive white paper detailing the theoretical foundation, methodologies, and initial research findings of QFAEN.
                </p>
              </div>
            </div>
            
            {/* White Paper Preview Content */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-600 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Abstract</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                This white paper presents the theoretical framework and preliminary research findings for Quantum‑Stabilized 
                Capacitive Energy Nodes (QFAEN), a revolutionary approach to energy storage that leverages quantum mechanical 
                principles to achieve unprecedented energy density and storage efficiency. Our research demonstrates the 
                potential for quantum-enhanced capacitive systems to store energy at densities exceeding conventional 
                technologies by orders of magnitude while maintaining rapid charge/discharge capabilities.
              </p>
              
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Table of Contents</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
                <div className="space-y-1">
                  <div>1. Introduction and Background</div>
                  <div>2. Quantum Mechanics in Energy Storage</div>
                  <div>3. Theoretical Framework</div>
                  <div>4. QFAEN Architecture Design</div>
                  <div>5. Error Correction Protocols</div>
                </div>
                <div className="space-y-1">
                  <div>6. Material Science Considerations</div>
                  <div>7. Manufacturing Methodologies</div>
                  <div>8. Integration Pathways</div>
                  <div>9. Future Research Directions</div>
                  <div>10. Conclusions and Implications</div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={handleDownloadWhitePaper}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span className="font-semibold">Download Full PDF</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">2.4 MB</span>
              </button>
              
              <div className="flex gap-2">
                <button className="px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm">
                  View Online
                </button>
                <button className="px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm">
                  Share Research
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-500 text-sm">
                <strong>Document Info:</strong> QFAEN-White-Paper-Heshware-2025.pdf | 47 pages | Published December 2024 | Version 1.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join us as we pioneer a new era of energy innovation with QFAEN</h2>
          <p className="text-slate-300 text-xl mb-8">
            Be part of groundbreaking research that could fundamentally change how humanity harnesses and stores energy.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              //onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Research Partnership
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
              Technical Papers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}