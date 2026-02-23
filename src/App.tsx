import { ArrowRight, Code, LayoutTemplate, Terminal } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Logo / Header */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter text-white">
            SOLVIA <span className="text-[#DFFF00]">TPV</span>
          </h1>
          <p className="text-xl text-gray-400">Development Environment</p>
        </div>

        {/* Main Action Card */}
        <div className="bg-[#111] border border-[#333] p-8 rounded-2xl hover:border-[#DFFF00] transition-colors group">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <LayoutTemplate className="w-6 h-6 text-[#DFFF00]" />
            Product Vision Page
          </h2>
          <p className="text-gray-400 mb-6">
            The standalone HTML vision document requested. Contains the product roadmap, market analysis, and motivational content for the founder.
          </p>
          <a 
            href="/vision.html" 
            className="inline-flex items-center gap-2 bg-[#DFFF00] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#cce600] transition-transform hover:scale-105"
          >
            Open Vision Page <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold">Tech Stack</h3>
            </div>
            <p className="text-sm text-gray-500">React + Tailwind + Vite (Ready for migration from Vanilla)</p>
          </div>
          
          <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-5 h-5 text-pink-500" />
              <h3 className="font-bold">Next Steps</h3>
            </div>
            <p className="text-sm text-gray-500">Implement the Onboarding Wizard defined in the roadmap.</p>
          </div>
        </div>

        <footer className="text-xs text-gray-600 pt-8">
          &copy; 2025 Solvia TPV. Built for the future of hospitality.
        </footer>
      </div>
    </div>
  );
}
