import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import SurvivalButtons from './components/SurvivalButtons';
import Timeline from './components/Timeline';
import StatusMeter from './components/StatusMeter';
import MemeBox from './components/MemeBox';
import './index.css';

function App() {
  const [mood, setMood] = useState('single'); // single, happy, crying
  const [theme, setTheme] = useState('breakup'); // breakup, selflove

  const getMoodColor = () => {
    if (theme === 'selflove') return 'from-emerald-900 to-teal-900';
    switch(mood) {
      case 'happy': return 'from-purple-900 to-pink-900';
      case 'crying': return 'from-gray-900 to-slate-900';
      default: return 'from-red-900 to-black';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getMoodColor()} text-white transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Theme Toggle */}
        <motion.div 
          className="flex justify-end mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setTheme(theme === 'breakup' ? 'selflove' : 'breakup')}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              theme === 'selflove' 
                ? 'bg-emerald-600 hover:bg-emerald-500' 
                : 'bg-red-600 hover:bg-red-500'
            }`}
          >
            {theme === 'breakup' ? '💔 Breakup Mode' : '💚 Self-Love Mode'}
          </button>
        </motion.div>

        <Hero mood={mood} setMood={setMood} theme={theme} />
        <SurvivalButtons theme={theme} />
        <Timeline />
        <StatusMeter />
        <MemeBox />

        {/* Footer */}
        <motion.footer 
          className="text-center mt-16 pb-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm">
            {theme === 'selflove' 
              ? '💚 Being single is peaceful, not lonely.' 
              : '💔 Made with pain and humor by singles, for singles.'}
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;