import { ArrowLeft, Home, Leaf, ShoppingCart, Bell, Mail, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CannabisStorePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-green-900/20"></div>
        
        {/* Floating Cannabis Leaves */}
        <div className="absolute top-20 left-10 w-8 h-8 text-green-400 opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-6 h-6 text-emerald-500 opacity-15 animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-20 w-10 h-10 text-green-600 opacity-10 animate-bounce" style={{animationDelay: '4s', animationDuration: '7s'}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-7 h-7 text-lime-500 opacity-25 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}>
          <Leaf className="w-full h-full" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-emerald-500/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8">
        {/* Store Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-green-400/30 shadow-2xl">
            <ShoppingCart className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-lime-400 to-green-400 rounded-full flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Coming Soon Heading */}
        <h1 className="coming-soon-heading text-6xl md:text-7xl font-bold mb-4 text-center">
          COMING SOON
        </h1>

        {/* Store Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Heshware Cannabis Store
          </span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-xl text-center max-w-3xl mb-8 leading-relaxed">
          Premium cannabis products cultivated with cutting-edge technology and sustainable practices. 
          Get ready for the future of cannabis retail.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm text-center">
            <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">Premium Quality</h3>
            <p className="text-slate-300 text-sm">
              Carefully curated strains with optimal THC/CBD profiles
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm text-center">
            <Leaf className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Organic Growing</h3>
            <p className="text-slate-300 text-sm">
              Sustainably grown using advanced hydroponic systems
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-900/40 to-green-900/30 p-6 rounded-2xl border border-teal-500/20 backdrop-blur-sm text-center">
            <ShoppingCart className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Easy Ordering</h3>
            <p className="text-slate-300 text-sm">
              Seamless online experience with fast, discreet delivery
            </p>
          </div>
        </div>

        {/* Launch Timeline */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm mb-8 max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Expected Launch</h3>
          </div>
          <p className="text-slate-300 text-lg mb-2">Q3 2026</p>
          <p className="text-slate-400 text-sm">
            We're working hard to bring you the best cannabis shopping experience. 
            Our cultivation facility is in development and will be ready soon!
          </p>
        </div>

        {/* Email Signup */}
        <div className="bg-gradient-to-r from-slate-900/60 to-green-900/40 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm max-w-md w-full">
          <div className="text-center mb-6">
            <Bell className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Get Notified</h3>
            <p className="text-slate-300 text-sm">
              Be the first to know when our store goes live and get exclusive early access!
            </p>
          </div>

          {!isSubscribed ? (
            <div className="space-y-4">
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <button
                onClick={handleNotifyMe}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Notify Me When Live
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-400 mb-1">You're All Set!</h4>
              <p className="text-slate-300 text-sm">
                We'll email you when the store launches.
              </p>
            </div>
          )}
        </div>

        {/* Legal Notice */}
        <div className="mt-8 text-center max-w-2xl">
          <p className="text-slate-500 text-xs">
            * Available in legal jurisdictions only. Must be 21+ to purchase. 
            Consumption is subject to local laws and regulations.
          </p>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="relative z-10 px-8 py-12 text-center border-t border-green-500/20">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Meanwhile, Learn About Our Growing Process
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Discover how we're revolutionizing cannabis cultivation with AI-powered growing systems 
          and sustainable practices.
        </p>
        <button 
          onClick={() => navigate('/heshware-agriculture')}
          className="px-8 py-4 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
        >
          Learn About Our Agriculture
        </button>
      </div>
    </div>
  );
}