import { ArrowLeft, Home, Users, Heart, Star, Trophy, Coffee, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeshwareCulturePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-black relative overflow-hidden">
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
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent mb-4">
          Heshware Culture
        </h1>
        <p className="text-slate-300 text-xl max-w-4xl mx-auto px-8">
          Team Development & Culture
        </p>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-900/40 to-rose-900/30 p-8 rounded-2xl border border-pink-500/30 mb-12">
            <div className="text-center space-y-6 text-slate-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Building Tomorrow's Workplace
              </p>
              <p>
                Heshware Culture is dedicated to creating an environment where innovation thrives, people grow, and meaningful work transforms both individuals and the world around us.
              </p>
              <p className="text-xl text-rose-400 font-semibold">
                Where passion meets purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Innovation First</h3>
              <p className="text-slate-300">
                We encourage bold thinking, creative problem-solving, and the courage to explore uncharted territories in technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-900/40 to-red-900/40 p-8 rounded-2xl border border-rose-500/30 hover:border-rose-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-rose-400 mb-4">Human-Centered</h3>
              <p className="text-slate-300">
                Every decision we make prioritizes human well-being, empathy, and the positive impact on our community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 p-8 rounded-2xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Excellence</h3>
              <p className="text-slate-300">
                We strive for excellence in everything we do, from code quality to customer experience to personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Development */}
      <section className="relative z-10 px-8 py-12 bg-gradient-to-r from-pink-900/60 to-rose-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Team Development Programs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 p-6 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">Continuous Learning</h3>
                <p className="text-slate-300">
                  Dedicated time and resources for skill development, conference attendance, and pursuing passions that drive innovation.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 p-6 rounded-2xl border border-rose-500/20">
                <h3 className="text-xl font-semibold text-rose-400 mb-3">Mentorship Network</h3>
                <p className="text-slate-300">
                  Connecting team members with experienced mentors and creating pathways for knowledge sharing and career growth.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-6 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-semibold text-red-400 mb-3">Innovation Time</h3>
                <p className="text-slate-300">
                  Regular time allocated for personal projects, experimentation, and exploring ideas that could shape our future products.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-8 rounded-2xl border border-pink-500/20">
              <Coffee className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white text-center mb-4">Work-Life Harmony</h3>
              <p className="text-slate-300 text-center mb-6">
                We believe in sustainable productivity that honors both professional excellence and personal well-being.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-pink-400 text-xs">✓</span>
                  </div>
                  <span className="text-slate-300 text-sm">Flexible work arrangements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-pink-400 text-xs">✓</span>
                  </div>
                  <span className="text-slate-300 text-sm">Mental health support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-pink-400 text-xs">✓</span>
                  </div>
                  <span className="text-slate-300 text-sm">Wellness programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-pink-400 text-xs">✓</span>
                  </div>
                  <span className="text-slate-300 text-sm">Team building activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Initiatives */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Culture Initiatives</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/20 p-8 rounded-2xl border border-pink-500/20">
              <h3 className="text-2xl font-semibold text-pink-400 mb-4">Diversity & Inclusion</h3>
              <p className="text-slate-300 mb-4">
                Building a diverse team where different perspectives, backgrounds, and experiences contribute to better solutions and innovation.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Ongoing Initiative</span>
                <span className="text-slate-500 text-sm">Core Priority</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-900/30 to-red-900/20 p-8 rounded-2xl border border-rose-500/20">
              <h3 className="text-2xl font-semibold text-rose-400 mb-4">Community Impact</h3>
              <p className="text-slate-300 mb-4">
                Encouraging team members to contribute to their communities through volunteer work, open-source projects, and educational initiatives.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm">Active Program</span>
                <span className="text-slate-500 text-sm">Company-wide</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-pink-900/20 p-8 rounded-2xl border border-red-500/20">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Recognition & Growth</h3>
              <p className="text-slate-300 mb-4">
                Celebrating achievements, providing clear career progression paths, and ensuring every team member feels valued and heard.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Established Process</span>
                <span className="text-slate-500 text-sm">Quarterly Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-slate-300 text-xl mb-8">
            Be part of a culture that values innovation, growth, and meaningful impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/team')}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
            >
              Meet The Team
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}