import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { History, ArrowRightLeft } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";

export default function TempProject() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [log, setLog] = useState([]);

  const handleCChange = (val) => {
    setCelsius(val);
    if (val === "" || isNaN(Number(val))) {
      setFahrenheit("");
    } else {
      const converted = (Number(val) * 9 / 5 + 32).toFixed(1);
      setFahrenheit(converted);
    }
  };

  const handleFChange = (val) => {
    setFahrenheit(val);
    if (val === "" || isNaN(Number(val))) {
      setCelsius("");
    } else {
      const converted = ((Number(val) - 32) * 5 / 9).toFixed(1);
      setCelsius(converted);
    }
  };

  const saveToLog = () => {
    if (celsius && fahrenheit) {
      setLog([{ c: celsius, f: fahrenheit, time: new Date().toLocaleTimeString() }, ...log].slice(0, 5));
    }
  };

  return (
    <ProjectPageLayout
      title="Celsius Flow"
      subtitle="Project #08: Temperature converter."
      maxWidth="max-w-md"
      backHoverColor="hover:text-[#06b6d4]"
      cardClassName="border border-cyan-100 shadow-2xl shadow-cyan-900/[0.05]">
      
            <div className="space-y-6 mb-8 sm:mb-12">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Celsius (°C)</label>
                    <div className="relative">
                        <input
              type="number"
              value={celsius}
              style={{ outline: "none" }}
              onChange={(e) => handleCChange(e.target.value)}
              placeholder="0.0"
              className="w-full px-5 py-4 sm:px-6 sm:py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:outline-none focus-visible:outline-none hover:border-[#06b6d4] focus:border-[#06b6d4] focus:ring-0 focus:ring-transparent focus:bg-white font-black text-xl sm:text-2xl text-[#0f172a] transition-colors" />
            
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-gray-300 text-lg sm:text-xl">°C</span>
                    </div>
                </div>

                <div className="flex justify-center py-2 opacity-30">
                    <ArrowRightLeft size={24} className="rotate-90" />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Fahrenheit (°F)</label>
                    <div className="relative">
                        <input
              type="number"
              value={fahrenheit}
              style={{ outline: "none" }}
              onChange={(e) => handleFChange(e.target.value)}
              placeholder="32.0"
              className="w-full px-5 py-4 sm:px-6 sm:py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:outline-none focus-visible:outline-none hover:border-[#06b6d4] focus:border-[#06b6d4] focus:ring-0 focus:ring-transparent focus:bg-white font-black text-xl sm:text-2xl text-[#0f172a] transition-colors" />
            
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-gray-300 text-lg sm:text-xl">°F</span>
                    </div>
                </div>

                <button
          onClick={saveToLog}
          disabled={!celsius}
          className="w-full py-4 bg-[#06b6d4] text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:bg-[#0891b2] transition-colors active:scale-[0.98] disabled:opacity-50">
          
                    Save to History
                </button>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-4 border-t border-gray-100 pt-8">
                    <History size={16} className="text-[#06b6d4]" />
                    <span className="text-xs font-black text-[#0f172a] uppercase tracking-wider">Conversion Log</span>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    <AnimatePresence>
                        {log.length === 0 ?
            <p className="text-[10px] sm:text-xs text-gray-300 font-medium">No recent logs.</p> :

            log.map((item, i) =>
            <motion.div
              key={`${i}-${item.time}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
              
                                    <span className="text-xs sm:text-sm font-bold text-[#06b6d4]">{item.c}°C → {item.f}°F</span>
                                    <span className="text-[9px] sm:text-[10px] font-black text-gray-300 uppercase tracking-wider">{item.time}</span>
                                </motion.div>
            )
            }
                    </AnimatePresence>
                </div>
            </div>
        </ProjectPageLayout>);

}