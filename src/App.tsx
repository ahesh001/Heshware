import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black flex items-center justify-center p-8">
      <div className="text-center">
        <Logo size={300} />
        <div className="mt-8 max-w-md mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            Connecting the world through infinite innovation and sustainable technology solutions.
          </p>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
          <button className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}