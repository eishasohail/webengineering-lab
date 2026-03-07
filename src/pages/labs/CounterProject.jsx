import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, RotateCcw, History, ArrowUpRight, ArrowDownRight, RefreshCcw, Trash2 } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";







export default function CounterProject() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const addToHistory = (newCount, type) => {
    const entry = {
      value: newCount,
      type: type,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    };
    // Keep only last 5 entries for simplicity
    setHistory((prev) => [entry, ...prev].slice(0, 5));
  };

  const increment = () => {
    const next = count + 1;
    setCount(next);
    addToHistory(next, "increment");
  };

  const decrement = () => {
    const next = Math.max(0, count - 1);
    if (next !== count) {
      setCount(next);
      addToHistory(next, "decrement");
    }
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <ProjectPageLayout
      title="Counter Hub"
      subtitle="Project #01: Counter with history log."
      maxWidth="max-w-2xl"
      showCard={false}
      containerClassName="bg-[#f8fafc]"
      backHoverColor="hover:text-blue-500">
      
            <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/[0.05] border border-blue-100 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

                {/* Display Area */}
                <div className="relative flex flex-col items-center justify-center mb-16">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Current Value</span>
                    <AnimatePresence mode="wait">
                        <motion.div
              key={count}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-8xl sm:text-9xl font-black tabular-nums text-blue-900 drop-shadow-md">
              
                            {count}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Main Controls - Improved Visibility */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <button
            onClick={decrement}
            disabled={count === 0}
            className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all active:scale-90 border border-slate-200 shadow-sm disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed group"
            title="Decrement">
            
                        <Minus size={28} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button
            onClick={reset}
            className="w-20 h-20 rounded-[2rem] bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-white hover:text-blue-900 hover:border-blue-200 transition-all active:scale-90 border border-slate-300 shadow-sm group"
            title="Clear & Result History">
            
                        <RotateCcw size={24} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                    <button
            onClick={increment}
            className="w-20 h-20 rounded-[2rem] bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-all active:scale-90 shadow-xl shadow-blue-900/30 group"
            title="Increment">
            
                        <Plus size={28} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Simplified Activity Log */}
                <div className="border-t-2 border-slate-100 pt-10">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                <History size={16} />
                            </div>
                            <span className="text-xs font-black text-blue-900 uppercase tracking-widest">Action Log</span>
                        </div>
                        {history.length > 0 &&
            <button onClick={() => setHistory([])} className="text-[9px] font-black text-slate-400 hover:text-rose-500 uppercase tracking-widest transition-colors flex items-center gap-2">
                                Clear Log <Trash2 size={10} />
                            </button>
            }
                    </div>

                    <div className="space-y-4">
                        <AnimatePresence initial={false} mode="popLayout">
                            {history.length === 0 ?
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-14 text-center rounded-[2.5rem] bg-slate-50/50 border border-dashed border-slate-200">
                
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm">
                                        <History size={20} className="text-slate-200" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                                        History is currently empty
                                    </p>
                                </motion.div> :

              history.map((entry, i) =>
              <motion.div
                key={`${entry.timestamp}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-5 p-5 bg-[#fcfdfe] rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${entry.type === "increment" ? "bg-blue-50 text-blue-600 border-blue-100" :
                entry.type === "decrement" ? "bg-rose-50 text-rose-600 border-rose-100" :
                "bg-slate-50 text-slate-600 border-slate-200"}`
                }>
                                            {entry.type === "increment" ? <ArrowUpRight size={20} /> :
                  entry.type === "decrement" ? <ArrowDownRight size={20} /> :
                  <RefreshCcw size={18} />}
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-sm font-black text-blue-900 tracking-tight">
                                                {entry.type === "increment" ? "Increased Value (+1)" :
                    entry.type === "decrement" ? "Decreased Value (-1)" :
                    "Reset to Reference Zero"}
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 tabular-nums">
                                                Log: {entry.timestamp}
                                            </p>
                                        </div>

                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">State</span>
                                            <span className="text-xl font-black text-blue-900 tabular-nums leading-none">{entry.value}</span>
                                        </div>
                                    </motion.div>
              )
              }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </ProjectPageLayout>);

}