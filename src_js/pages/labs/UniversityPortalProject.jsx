import React, { useState } from "react";
import { Users, UserPlus, Search, CheckCircle2, Trash2, GraduationCap, MapPin } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
import StatCard from "../../components/common/StatCard";
export default function UniversityPortalProject() {
    const [students, setStudents] = useState([
        { id: 1, name: "Ali Ahmed", course: "Software Engineering", section: "A", status: "Active", email: "ali@ned.edu.pk", joinDate: "2023" },
        { id: 2, name: "Sara Khan", course: "Computer Science", section: "B", status: "Active", email: "sara@ned.edu.pk", joinDate: "2022" },
        { id: 3, name: "Zain Malik", course: "Electronic Engineering", section: "C", status: "Graduated", email: "zain@ned.edu.pk", joinDate: "2020" },
    ]);
    const [form, setForm] = useState({ name: "", course: "", batch: "", section: "", email: "" });
    const [searchTerm, setSearchTerm] = useState("");
    const addStudent = (e) => {
        e.preventDefault();
        if (!form.name || !form.email)
            return;
        const newStudent = {
            id: Date.now(),
            name: form.name,
            course: form.course,
            section: form.section,
            email: form.email,
            status: "Active",
            joinDate: form.batch,
        };
        setStudents([...students, newStudent]);
        setForm({ name: "", course: "", batch: "", section: "", email: "" });
    };
    const deleteStudent = (id) => {
        setStudents(students.filter(s => s.id !== id));
    };
    const stats = [
        { label: "Total Students", value: students.length.toString(), icon: <Users />, valueColor: "text-[#002B5B]", iconBg: "bg-blue-50/50" },
        { label: "NED Campus", value: "Main", icon: <MapPin />, valueColor: "text-[#002B5B]", iconBg: "bg-blue-50/50" },
    ];
    return (<ProjectPageLayout title="NED University Portal" subtitle="Project #12: Full integration project." maxWidth="max-w-7xl" showCard={false} containerClassName="bg-[#f1f5f9]" backHoverColor="hover:text-[#002B5B]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {stats.map((stat, i) => (<StatCard key={i} {...stat}/>))}
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
                {/* Form Section */}
                <div className="xl:w-[400px]">
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-slate-900/[0.03] border border-white sticky top-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#002B5B] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                                <UserPlus size={24}/>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#0f172a]">Registration</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Enroll New Student</p>
                            </div>
                        </div>
                        <form onSubmit={addStudent} className="space-y-6">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Full Name</label>
                                <input type="text" value={form.name} style={{ outline: "none" }} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold text-black placeholder:text-slate-300" placeholder="Enter full name"/>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Email Address</label>
                                <input type="email" value={form.email} style={{ outline: "none" }} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold text-black placeholder:text-slate-300" placeholder="name@ned.edu.pk"/>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Department</label>
                                <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className={`w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:outline-none focus-visible:outline-none hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold appearance-none cursor-pointer ${form.course ? "text-black" : "text-slate-300"}`}>
                                    <option value="" disabled hidden>Select Department</option>
                                    <option>Software Engineering</option>
                                    <option>Computer Science</option>
                                    <option>Electronic Engineering</option>
                                    <option>Chemical Engineering</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Batch</label>
                                    <select value={form.batch} onChange={(e) => setForm({ ...form, batch: e.target.value })} className={`w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:outline-none focus-visible:outline-none hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold appearance-none cursor-pointer ${form.batch ? "text-black" : "text-slate-300"}`}>
                                        <option value="" disabled hidden>Select Batch</option>
                                        {["2021", "2022", "2023", "2024"].map(b => <option key={b}>{b}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Section</label>
                                    <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className={`w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:outline-none focus-visible:outline-none hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold appearance-none cursor-pointer ${form.section ? "text-black" : "text-slate-300"}`}>
                                        <option value="" disabled hidden>Select Section</option>
                                        {["A", "B", "C", "D"].map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                            <button className="w-full py-5 bg-[#002B5B] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#003d80] active:scale-[0.98] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-2 mt-4">
                                <CheckCircle2 size={16}/> Enrol Student
                            </button>
                        </form>
                    </div>
                </div>

                {/* Table Section */}
                <div className="flex-1">
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-900/[0.03] border border-white">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                            <h3 className="text-2xl font-extrabold text-[#0f172a] flex items-center gap-3">
                                <GraduationCap size={28} className="text-[#002B5B]"/>
                                Student Database
                            </h3>
                            <div className="relative flex-1 max-w-sm group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-[#002B5B] group-focus-within:text-[#002B5B] transition-colors" size={18}/>
                                <input type="text" value={searchTerm} style={{ outline: "none" }} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search registry..." className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] focus:border-[#002B5B] focus:ring-0 focus:ring-transparent focus:bg-white font-bold text-black text-sm placeholder:text-slate-300"/>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Student</th>
                                        <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Academia</th>
                                        <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                        <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pr-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {students
            .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.email.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((student) => (<tr key={student.id} className="group hover:bg-slate-50/50 transition-colors">
                                                <td className="py-6 pl-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-[#002B5B]/10 flex items-center justify-center text-[#002B5B] font-black text-lg">
                                                            {student.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-[#0f172a] text-sm">{student.name}</p>
                                                            <p className="text-xs text-slate-400 font-medium">{student.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-6">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{student.course}</span>
                                                        <span className="text-[10px] font-bold text-slate-400 mt-1">Batch {student.joinDate} • Section {student.section}</span>
                                                    </div>
                                                </td>
                                                <td className="py-6">
                                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 ${student.status === "Active" ? "bg-blue-50 text-[#002B5B]" : "bg-slate-100 text-slate-500"}`}>
                                                        <CheckCircle2 size={12}/> {student.status}
                                                    </span>
                                                </td>
                                                <td className="py-6 pr-4">
                                                    <button onClick={() => deleteStudent(student.id)} className="p-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                                                        <Trash2 size={18}/>
                                                    </button>
                                                </td>
                                            </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Cards Grid */}
            <div className="mt-16">
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-10 flex items-center gap-3">
                    <Users size={28} className="text-[#002B5B]"/>
                    Student Profile Cards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {students.map(student => (<div key={student.id} className="bg-white rounded-[2.5rem] p-8 border border-white shadow-xl shadow-slate-900/[0.03] group hover:scale-[1.02] transition-all hover:shadow-blue-900/[0.05]">
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-16 h-16 rounded-[1.25rem] bg-[#002B5B] text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-900/20 group-hover:rotate-6 transition-transform">
                                    {student.name[0]}
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${student.status === "Active" ? "bg-blue-50 text-blue-700" : "bg-slate-50 text-slate-400"}`}>
                                    {student.status}
                                </span>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xl font-extrabold text-[#0f172a] mb-1">{student.name}</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{student.course}</p>
                            </div>
                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-slate-400">Section</span>
                                    <span className="text-slate-800">{student.section}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-slate-400">Batch Year</span>
                                    <span className="text-slate-800">{student.joinDate}</span>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </ProjectPageLayout>);
}
