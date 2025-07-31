import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Building2, Cpu, Sprout, Zap, Brain, Users } from "lucide-react";

export function CompanyDivisionsSnackbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const divisions = [
    {
      name: "Heshware Quantum",
      icon: <Cpu className="w-4 h-4" />,
      description: "Quantum Systems & Software Development",
      color: "from-blue-500 to-cyan-500",
      path: "/heshware-quantum"
    },
    {
      name: "Heshware AI",
      icon: <Brain className="w-4 h-4" />,
      description: "Artificial intelligence research, Marven, labor optimization, deep learning",
      color: "from-indigo-500 to-purple-500",
      path: "/heshware-ai"
    },
    {
      name: "Heshware Agriculture",
      icon: <Sprout className="w-4 h-4" />,
      description: "Cannabis cultivation, smart farming, hydroponics, food tech",
      color: "from-green-500 to-emerald-500",
      path: "/heshware-agriculture"
    },
    {
      name: "Heshware Labs",
      icon: <Brain className="w-4 h-4" />,
      description: "Experimental and interdisciplinary R&D with NEXA & Consciousness Studies",
      color: "from-purple-500 to-pink-500",
      path: "/heshware-labs"
    },
    {
      name: "Heshware Culture",
      icon: <Users className="w-4 h-4" />,
      description: "Team Development & Culture",
      color: "from-pink-500 to-rose-500",
      path: "/heshware-culture"
    },
    {
      name: "Heshware Energy",
      icon: <Zap className="w-4 h-4" />,
      description: "QFAEN Technology & Renewable Systems",
      color: "from-yellow-500 to-orange-500",
      path: "/heshware-energy"
    }
  ];

  const handleDivisionClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Main Snackbar */}
        <div 
          className={`bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-lg border-b border-slate-700/50 transition-all duration-300 ${
            isOpen ? 'shadow-2xl' : 'shadow-lg'
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsOpen(true)}
            className="w-full px-6 py-3 flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <Building2 className="w-5 h-5" />
            <span className="font-medium">Heshware Divisions</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dropdown Panel */}
        <div 
          className={`absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/50 transition-all duration-300 ${
            isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {divisions.map((division, index) => (
                <button
                  key={division.name}
                  onClick={() => handleDivisionClick(division.path)}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 text-left w-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${division.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {division.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm mb-1">{division.name}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{division.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-sm">
                Building an integrated ecosystem where technology meets sustainability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}