import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Phone, MapPin } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
export default function RegistrationProject() {
    const [profiles, setProfiles] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
    const [editingId, setEditingId] = useState(null);
    const userColors = [
        { bg: "bg-blue-50", text: "text-blue-600", hover: "group-hover:bg-blue-600" },
        { bg: "bg-rose-50", text: "text-rose-600", hover: "group-hover:bg-rose-600" },
        { bg: "bg-emerald-50", text: "text-emerald-600", hover: "group-hover:bg-emerald-600" },
        { bg: "bg-amber-50", text: "text-amber-600", hover: "group-hover:bg-amber-600" },
        { bg: "bg-violet-50", text: "text-violet-600", hover: "group-hover:bg-violet-600" },
        { bg: "bg-cyan-50", text: "text-cyan-600", hover: "group-hover:bg-cyan-600" },
        { bg: "bg-orange-50", text: "text-orange-600", hover: "group-hover:bg-orange-600" },
        { bg: "bg-fuchsia-50", text: "text-fuchsia-600", hover: "group-hover:bg-fuchsia-600" },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email)
            return;
        if (editingId) {
            setProfiles(profiles.map(p => p.id === editingId ? { ...formData, id: p.id, colorIndex: p.colorIndex } : p));
            setEditingId(null);
        }
        else {
            setProfiles([{ id: Date.now(), ...formData, colorIndex: Math.floor(Math.random() * userColors.length) }, ...profiles]);
        }
        setFormData({ name: "", email: "", phone: "", address: "" });
    };
    const deleteProfile = (id) => {
        setProfiles(profiles.filter(p => p.id !== id));
    };
    const startEdit = (profile) => {
        setEditingId(profile.id);
        setFormData({ name: profile.name, email: profile.email, phone: profile.phone, address: profile.address });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const cancelEdit = () => {
        setEditingId(null);
        setFormData({ name: "", email: "", phone: "", address: "" });
    };
    const inputCls = "w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 transition-all font-bold text-slate-700 text-sm shadow-sm placeholder:text-slate-300";
    const labelCls = "text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 mb-2 block";
    return (<ProjectPageLayout title="Profile Registry" subtitle="Project #03: User registration and display." maxWidth="max-w-7xl" showCard={false} containerClassName="bg-[#fafafa]" backHoverColor="hover:text-purple-600">
            <div className="flex flex-col lg:flex-row gap-12 sm:gap-16">
                {/* Form Column */}
                <div className="lg:w-[420px]">
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-slate-100 sticky top-8">
                        <div className="flex items-center gap-4 mb-10">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${editingId ? 'bg-cyan-50 text-cyan-600 rotate-12' : 'bg-purple-50 text-purple-600'}`}>
                                {editingId ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>) : (<UserPlus size={24}/>)}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-800 tracking-tight">{editingId ? 'Edit Profile' : 'New Identity'}</h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-0.5">{editingId ? 'Modification Mode' : 'Registration Gateway'}</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={labelCls}>Full Name</label>
                                <input type="text" required value={formData.name} style={{ outline: "none" }} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. John Doe" className={`w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:outline-none transition-all font-bold text-slate-700 text-sm shadow-sm placeholder:text-slate-300 ${editingId ? 'focus:ring-2 focus:ring-transparent focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]' : 'focus:ring-2 focus:ring-transparent focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(147,51,234,0.1)]'}`}/>
                            </div>
                            <div>
                                <label className={labelCls}>Email Address</label>
                                <input type="email" required value={formData.email} style={{ outline: "none" }} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" className={`w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:outline-none transition-all font-bold text-slate-700 text-sm shadow-sm placeholder:text-slate-300 ${editingId ? 'focus:ring-2 focus:ring-transparent focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]' : 'focus:ring-2 focus:ring-transparent focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(147,51,234,0.1)]'}`}/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelCls}>Phone</label>
                                    <input type="tel" required value={formData.phone} style={{ outline: "none" }} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 234 567 8901" className={`w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:outline-none transition-all font-bold text-slate-700 text-sm shadow-sm placeholder:text-slate-300 ${editingId ? 'focus:ring-2 focus:ring-transparent focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]' : 'focus:ring-2 focus:ring-transparent focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(147,51,234,0.1)]'}`}/>
                                </div>
                                <div>
                                    <label className={labelCls}>Location</label>
                                    <input type="text" required value={formData.address} style={{ outline: "none" }} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="City" className={`w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:outline-none transition-all font-bold text-slate-700 text-sm shadow-sm placeholder:text-slate-300 ${editingId ? 'focus:ring-2 focus:ring-transparent focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]' : 'focus:ring-2 focus:ring-transparent focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(147,51,234,0.1)]'}`}/>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button type="submit" className={`flex-1 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-sm ${editingId ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                                    {editingId ? 'Update Record' : 'Create Record'}
                                </button>
                                {editingId && (<button type="button" onClick={cancelEdit} className="px-6 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">
                                        Cancel
                                    </button>)}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Display Column */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-12 px-2">
                        <div>
                            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Active Directory</h3>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
                                {profiles.length} Secured Entries
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <AnimatePresence mode='popLayout'>
                            {profiles.length === 0 ? (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-32 text-center rounded-[2.5rem] border border-dashed border-slate-200 bg-white/50">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                                        <UserPlus size={32} className="text-slate-300"/>
                                    </div>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Directory Empty</h4>
                                </motion.div>) : (profiles.map(profile => {
            const colors = userColors[profile.colorIndex || 0];
            return (<motion.div key={profile.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="p-6 bg-white border border-slate-100 rounded-[2rem] relative group hover:shadow-xl hover:shadow-slate-100/30 transition-all duration-300">
                                            <div className="flex items-center justify-between gap-6">
                                                <div className="flex items-center gap-5 min-w-0 flex-1">
                                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center text-lg font-black shadow-sm ${colors.hover} group-hover:text-white transition-all duration-300 flex-shrink-0`}>
                                                        {profile.name[0].toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-[1.05rem] font-black text-slate-800 tracking-tight leading-tight whitespace-nowrap">{profile.name}</h4>
                                                        <span className="text-[10px] font-bold text-slate-500 tracking-widest block whitespace-nowrap">{profile.email}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 flex-shrink-0">
                                                    <div className="hidden sm:flex items-center gap-8 mr-2">
                                                        <div className="flex items-center gap-2.5">
                                                            <Phone size={14} className={colors.text}/>
                                                            <span className="text-[11px] font-black text-slate-700 whitespace-nowrap">{profile.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2.5">
                                                            <MapPin size={14} className={colors.text}/>
                                                            <span className="text-[11px] font-black text-slate-700 whitespace-nowrap">{profile.address}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        {!editingId && (<button onClick={() => startEdit(profile)} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-full transition-all sm:opacity-0 group-hover:opacity-100">
                                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            </button>)}
                                                        <button onClick={() => deleteProfile(profile.id)} className="w-4 h-4 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all active:scale-75" title="Delete Profile">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:bg-white transition-colors"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>);
        }))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </ProjectPageLayout>);
}
