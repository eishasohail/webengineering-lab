import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
const QUESTIONS = [
    { id: 1, text: "Which React hook is used to handle side effects?", options: ["useState", "useEffect", "useContext", "useReducer"], correct: 1 },
    { id: 2, text: "What is the purpose of React Fragments?", options: ["Add extra DOM nodes", "Group elements without adding nodes", "Handle animations", "Manage global state"], correct: 1 },
    { id: 3, text: "What is JSX?", options: ["A CSS framework", "JavaScript XML", "A database system", "A testing tool"], correct: 1 },
    { id: 4, text: "Which hook provides access to the DOM?", options: ["useRef", "useMemo", "useCallback", "useLayoutEffect"], correct: 0 },
    { id: 5, text: "What command creates a new Vite project?", options: ["npx create-react-app", "npm init vite", "npm install react", "vite start"], correct: 1 },
];
export default function QuizProject() {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(new Array(QUESTIONS.length).fill(-1));
    const [finished, setFinished] = useState(false);
    const handleSelect = (idx) => {
        const newAnswers = [...answers];
        newAnswers[current] = idx;
        setAnswers(newAnswers);
    };
    const next = () => {
        if (current < QUESTIONS.length - 1)
            setCurrent(current + 1);
        else
            setFinished(true);
    };
    const prev = () => {
        if (current > 0)
            setCurrent(current - 1);
    };
    const score = answers.reduce((acc, ans, idx) => acc + (ans === QUESTIONS[idx].correct ? 1 : 0), 0);
    const reset = () => {
        setCurrent(0);
        setAnswers(new Array(QUESTIONS.length).fill(-1));
        setFinished(false);
    };
    const BURGUNDY = "bg-[#800020]";
    const BURGUNDY_TEXT = "text-[#800020]";
    const EMERALD = "bg-[#10b981]";
    const EMERALD_TEXT = "text-[#10b981]";
    return (<ProjectPageLayout title="React Quiz" subtitle="Project #07: Interactive quiz application." maxWidth="max-w-xl" showCard={false} containerClassName="bg-slate-50/50" backHoverColor="hover:text-[#800020]">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 mt-6 overflow-hidden">
                <AnimatePresence mode="wait">
                    {!finished ? (<motion.div key={current} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                            {/* Quiz Header */}
                            <div className="flex items-center justify-between mb-8">
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${BURGUNDY_TEXT}`}>
                                    Question {current + 1}
                                </span>
                                <div className="flex gap-1.5">
                                    {QUESTIONS.map((_, i) => (<div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === current ? `w-6 ${BURGUNDY}` :
                    answers[i] !== -1 ? "w-1.5 bg-slate-400" : "w-1.5 bg-slate-100"}`}/>))}
                                </div>
                            </div>

                            <h2 className="text-xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                                {QUESTIONS[current].text}
                            </h2>

                            <div className="space-y-3 mb-10">
                                {QUESTIONS[current].options.map((opt, idx) => (<button key={idx} onClick={() => handleSelect(idx)} className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between group active:scale-[0.98] ${answers[current] === idx
                    ? `border-[#800020] bg-white ${BURGUNDY_TEXT}`
                    : "border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-200 text-slate-500"}`}>
                                        <div className="flex items-center gap-4">
                                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] uppercase border transition-all ${answers[current] === idx ? `${BURGUNDY} text-white border-[#800020]` : "bg-white border-slate-100 text-slate-300 group-hover:border-slate-200"}`}>
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            <span className="font-bold text-sm tracking-tight">{opt}</span>
                                        </div>
                                        {answers[current] === idx && <CheckCircle2 size={16}/>}
                                    </button>))}
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <button onClick={prev} disabled={current === 0} className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${current === 0 ? "text-slate-200 cursor-not-allowed" : "text-slate-400 hover:text-[#800020]"}`}>
                                    <ArrowLeft size={12}/> Previous
                                </button>
                                <button onClick={next} disabled={answers[current] === -1} className={`px-8 py-3.5 ${BURGUNDY} text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-red-900/10 ${answers[current] === -1 ? "opacity-20 cursor-not-allowed" : "hover:brightness-110"}`}>
                                    {current === QUESTIONS.length - 1 ? "Results" : "Next"} <ArrowRight size={14}/>
                                </button>
                            </div>
                        </motion.div>) : (<motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col">
                            {/* Detailed Performance Header */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-slate-50 relative mb-6">
                                    <div className="absolute inset-0 rounded-full border-4 border-[#10b981] clip-circle" style={{ clipPath: `inset(${100 - (score / QUESTIONS.length * 100)}% 0 0 0)` }}/>
                                    <div className="flex flex-col items-center">
                                        <span className={`text-4xl font-black ${score >= 4 ? 'text-[#10b981]' : BURGUNDY_TEXT}`}>{score}</span>
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">/ {QUESTIONS.length}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">Final Appraisal</h2>
                                <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[9px]">Frontend Engineering Performance Data</p>
                            </div>

                            {/* Rapid Status Bar */}
                            <div className="flex justify-center gap-3 mb-10 pb-8 border-b border-slate-50">
                                {QUESTIONS.map((_, i) => (<div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all ${answers[i] === QUESTIONS[i].correct
                    ? "bg-emerald-50 border-emerald-100 text-emerald-500"
                    : "bg-red-50 border-red-100 text-red-400"}`}>
                                        {answers[i] === QUESTIONS[i].correct ? <CheckCircle2 size={16}/> : <XCircle size={16}/>}
                                    </div>))}
                            </div>

                            {/* Ultra-Minimal Breakdown List */}
                            <div className="space-y-4 mb-12">
                                {QUESTIONS.map((q, i) => (<div key={q.id} className="flex items-center justify-between py-1 group">
                                        <div className="flex items-center gap-4">
                                            <span className={`text-[10px] font-black w-4 ${answers[i] === q.correct ? EMERALD_TEXT : 'text-red-400'}`}>
                                                {i + 1}
                                            </span>
                                            <p className="font-bold text-slate-600 text-[13px] tracking-tight">{q.text}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {answers[i] !== q.correct && (<span className={`${EMERALD_TEXT} text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity`}>
                                                    Solution: {q.options[q.correct]}
                                                </span>)}
                                            <span className={`text-[9px] font-black uppercase tracking-widest ${answers[i] === q.correct ? EMERALD_TEXT : 'text-red-400'}`}>
                                                {answers[i] === q.correct ? "Passed" : "Missed"}
                                            </span>
                                        </div>
                                    </div>))}
                            </div>

                            {/* Primary Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={reset} className={`py-4 ${BURGUNDY} text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-red-900/10 hover:brightness-110 transition-all`}>
                                    <RotateCcw size={16}/> Restart Assessment
                                </button>
                                <Link to="/" className="py-4 border-2 border-slate-100 text-slate-400 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-slate-300 hover:text-slate-900 transition-all text-center flex items-center justify-center">
                                    Exit to Dashboard
                                </Link>
                            </div>
                        </motion.div>)}
                </AnimatePresence>
            </div>
        </ProjectPageLayout>);
}
