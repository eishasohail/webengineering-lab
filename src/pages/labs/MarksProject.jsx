import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Search,
  Download,
  GraduationCap,
  Sparkles,
  Shield,
  UserPlus,
  ArrowUpDown,
  CheckCircle2 } from
"lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";









const STUDENTS = [
{ id: 1, name: "Ahmed Hassan", subject: "Quantum Physics", marks: 92, grade: "A+" },
{ id: 2, name: "Fatima Zahra", subject: "Advanced AI", marks: 85, grade: "A" },
{ id: 3, name: "Muhammad Ali", subject: "Cryptography", marks: 78, grade: "B+" },
{ id: 4, name: "Zoya Khan", subject: "Quantum Physics", marks: 95, grade: "A+" },
{ id: 5, name: "Bilal Ahmed", subject: "Advanced AI", marks: 68, grade: "C" },
{ id: 6, name: "Sarah Malik", subject: "Advanced Mathematics", marks: 88, grade: "A" },
{ id: 7, name: "Omar Farooq", subject: "Cryptography", marks: 72, grade: "B" },
{ id: 8, name: "Ayesha Siddiqui", subject: "Quantum Physics", marks: 91, grade: "A" }];


export default function MarksProject() {
  const [data, setData] = useState(STUDENTS);
  const [sortConfig, setSortConfig] = useState(null);
  const [search, setSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState("All");

  const subjects = ["All", ...Array.from(new Set(STUDENTS.map((s) => s.subject)))];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      const aVal = key === 'marks' ? Number(a[key]) : String(a[key]);
      const bVal = key === 'marks' ? Number(b[key]) : String(b[key]);
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const filteredData = data.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = filterSubject === "All" || s.subject === filterSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <ProjectPageLayout
      title="Performance Portal"
      subtitle="Project #05: Data table with sort and filter."
      maxWidth="max-w-7xl"
      showCard={false}
      containerClassName="bg-slate-50/50"
      backHoverColor="hover:text-slate-800">
      
            <div className="space-y-10">
                {/* Statistics HUD with Icon 'Logo' Tilt */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
          { label: "Class Average", val: Math.round(STUDENTS.reduce((acc, s) => acc + s.marks, 0) / STUDENTS.length), suffix: "%", icon: <GraduationCap size={18} />, color: "text-slate-600", bg: "bg-slate-50" },
          { label: "Top Performer", val: Math.max(...STUDENTS.map((s) => s.marks)), suffix: "/ 100", icon: <Sparkles size={18} />, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Stability", val: "94", suffix: "%", icon: <Shield size={18} />, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Enrolled", val: STUDENTS.length, suffix: " Active", icon: <UserPlus size={18} />, color: "text-slate-500", bg: "bg-slate-50" }].
          map((stat, i) =>
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-xl hover:shadow-slate-200/40 transition-all cursor-default">
                            <motion.div
              whileHover={{ rotate: 15, scale: 1.15, rotateY: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shadow-sm`}>
              
                                {stat.icon}
                            </motion.div>
                            <div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5">{stat.label}</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-black text-[#0f172a]">{stat.val}</span>
                                    <span className="text-[9px] font-black text-slate-300 uppercase">{stat.suffix}</span>
                                </div>
                            </div>
                        </div>
          )}
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/[0.04] border border-slate-100 overflow-hidden">
                    {/* Control Panel */}
                    <div className="p-8 border-b border-slate-50 bg-slate-50/20 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-1">
                            <div className="relative flex-1 max-w-md group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-slate-900 transition-colors" size={18} />
                                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search student records..."
                  className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 focus:border-slate-900 rounded-2xl outline-none transition-all font-bold text-sm text-[#0f172a] placeholder:text-slate-300" />
                
                            </div>
                            <div className="relative">
                                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="w-full md:w-auto pl-6 pr-12 py-4 bg-[#0f172a] text-white rounded-2xl outline-none font-black text-[10px] uppercase tracking-widest appearance-none cursor-pointer hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  
                                    {subjects.map((s) => <option key={s} value={s}>{s === "All" ? "Filter by Subject" : s}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" size={14} />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all group active:scale-95">
                                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                                Export List
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white">
                                    <th onClick={() => handleSort('name')} className="py-7 px-10 cursor-pointer group select-none relative hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                                                Student Name
                                            </span>
                                            <div className="p-1 rounded-md bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                                {sortConfig?.key === 'name' ?
                        sortConfig.direction === 'asc' ? <ChevronUp size={14} className="text-slate-900" /> : <ChevronDown size={14} className="text-slate-900" /> :
                        <ArrowUpDown size={12} className="text-slate-300 group-hover:text-slate-500" />}
                                            </div>
                                        </div>
                                    </th>
                                    <th className="py-7 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                                        Academic Subject
                                    </th>
                                    <th onClick={() => handleSort('marks')} className="py-7 px-10 cursor-pointer group text-right select-none hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center justify-end gap-3">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                                                Score (100)
                                            </span>
                                            <div className="p-1 rounded-md bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                                {sortConfig?.key === 'marks' ?
                        sortConfig.direction === 'asc' ? <ChevronUp size={14} className="text-slate-900" /> : <ChevronDown size={14} className="text-slate-900" /> :
                        <ArrowUpDown size={12} className="text-slate-300 group-hover:text-slate-500" />}
                                            </div>
                                        </div>
                                    </th>
                                    <th className="py-7 px-10 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                                        Final Grade
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <AnimatePresence mode='popLayout'>
                                    {filteredData.map((student) =>
                  <motion.tr
                    key={student.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group hover:bg-slate-50 transition-all duration-300">
                    
                                            <td className="py-8 px-10">
                                                <div className="flex items-center gap-5">
                                                    <div className="relative">
                                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-xs group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                                                            {student.name.split(' ').map((n) => n[0]).join('')}
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                                                    </div>
                                                    <div>
                                                        <div className="font-black text-[#0f172a] text-base tracking-tight mb-0.5 group-hover:text-black">{student.name}</div>
                                                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                                                            <CheckCircle2 size={10} className="text-emerald-500" /> Verified Record
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-8 px-8">
                                                <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">{student.subject}</span>
                                            </td>
                                            <td className="py-8 px-10 text-right">
                                                <div className="inline-flex flex-col items-end">
                                                    <div className="flex items-baseline gap-1 mb-2">
                                                        <span className="font-black text-[#0f172a] text-2xl tabular-nums leading-none tracking-tighter">
                                                            {student.marks}
                                                        </span>
                                                        <span className="text-[10px] font-black text-slate-400">/ 100</span>
                                                    </div>
                                                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
                                                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${student.marks}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${student.marks >= 90 ? 'bg-emerald-500' :
                            student.marks >= 80 ? 'bg-slate-900' :
                            'bg-amber-500'}`
                            } />
                          
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-8 px-10 text-center">
                                                <span className={`inline-block px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-sm border transition-all ${student.grade.startsWith('A') ? 'bg-emerald-50 text-emerald-900 border-emerald-200' :
                      student.grade.startsWith('B') ? 'bg-slate-100 text-slate-900 border-slate-200' :
                      'bg-amber-50 text-amber-900 border-amber-200'}`
                      }>
                                                    Grade {student.grade}
                                                </span>
                                            </td>
                                        </motion.tr>
                  )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>

                    {filteredData.length === 0 &&
          <div className="py-40 text-center bg-white">
                            <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-slate-200 shadow-inner">
                                <Search size={32} />
                            </div>
                            <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tighter mb-2">Access Denied</h3>
                            <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto">Systems failed to retrieve student data matching your current protocol.</p>
                        </div>
          }
                </div>

                {/* Footer Info */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Database Encrypted & Secure</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance Version 2.4.0</span>
                </div>
            </div>
        </ProjectPageLayout>);

}