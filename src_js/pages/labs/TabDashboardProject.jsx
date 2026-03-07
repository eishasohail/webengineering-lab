import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, Package, Bell, Shield, CreditCard, Edit3, Camera, Check, X } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
export default function TabDashboardProject() {
    const [activeTab, setActiveTab] = useState("profile");
    const [notifications, setNotifications] = useState({ push: true, twofa: false, billing: true });
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Eisha Sohail", username: "@eisha_s", email: "eisha.s@gmail.com",
        phone: "+92 300 1234567", location: "Lahore, Pakistan",
    });
    const [editDraft, setEditDraft] = useState(profile);
    const tabs = [
        { id: "profile", label: "Profile", icon: <User size={18}/> },
        { id: "settings", label: "Settings", icon: <Settings size={18}/> },
        { id: "orders", label: "Orders", icon: <Package size={18}/> },
    ];
    const orders = [
        { id: "#ORD-4092", date: "Jan 12, 2025", status: "Delivered", amount: 12500, items: 3 },
        { id: "#ORD-3981", date: "Dec 30, 2024", status: "In Transit", amount: 4800, items: 1 },
        { id: "#ORD-3855", date: "Dec 15, 2024", status: "Cancelled", amount: 2450, items: 2 },
        { id: "#ORD-3721", date: "Nov 28, 2024", status: "Delivered", amount: 8900, items: 4 },
    ];
    const statusStyle = {
        "Delivered": "bg-emerald-50 text-emerald-600 border border-emerald-100",
        "In Transit": "bg-sky-50 text-sky-600 border border-sky-100",
        "Cancelled": "bg-red-50 text-red-500 border border-red-100",
    };
    const startEdit = () => { setEditDraft({ ...profile }); setIsEditing(true); };
    const saveEdit = () => { setProfile({ ...editDraft }); setIsEditing(false); };
    const cancelEdit = () => setIsEditing(false);
    const inputCls = "w-full px-5 py-3.5 bg-stone-50 border-2 border-transparent rounded-xl outline-none focus:bg-white focus:border-teal-600 focus:ring-4 focus:ring-teal-600/5 font-black text-stone-800 transition-all text-[11px] uppercase tracking-widest";
    return (<ProjectPageLayout title="Account Dashboard" subtitle="Project #10: Dashboard with tabs." maxWidth="max-w-4xl" backHoverColor="hover:text-teal-600">
            {/* Profile Header Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-stone-100 mb-8 shadow-sm flex flex-col sm:flex-row items-center gap-10">
                <div className="relative flex-shrink-0 group">
                    <div className="w-24 h-24 rounded-[1.5rem] bg-teal-600 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-teal-100 group-hover:scale-105 transition-transform duration-500">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white border border-stone-100 rounded-xl flex items-center justify-center text-stone-400 shadow-lg hover:text-teal-600 transition-all active:scale-95">
                        <Camera size={12}/>
                    </button>
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-2xl font-black text-stone-800 mb-1 tracking-tight">{profile.name}</h1>
                    <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">{profile.username} · {profile.email}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
                        <span className="text-[8px] font-black text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 uppercase tracking-[0.2em]">
                            Premium Member
                        </span>
                        <span className="text-[8px] font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 uppercase tracking-[0.2em]">
                            Gold Status
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                    {activeTab === "profile" && !isEditing && (<button onClick={startEdit} className="flex items-center justify-center gap-2 px-6 py-4 bg-stone-50 text-stone-600 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-stone-100 transition-all border border-stone-100">
                            <Edit3 size={14}/> Edit Profile
                        </button>)}
                    {activeTab === "profile" && isEditing && (<div className="flex gap-2">
                            <button onClick={saveEdit} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
                                <Check size={14}/> Save
                            </button>
                            <button onClick={cancelEdit} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-stone-100 text-stone-500 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-stone-200 transition-all">
                                <X size={14}/> Cancel
                            </button>
                        </div>)}
                </div>
            </div>

            {/* Tabs Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                {/* Tab Bar */}
                <div className="flex flex-wrap border-b border-stone-100 px-6 sm:px-10 pt-2 gap-2">
                    {tabs.map(tab => (<button key={tab.id} onClick={() => { setActiveTab(tab.id); setIsEditing(false); }} className={`relative flex items-center gap-3 px-6 py-6 font-black text-[10px] uppercase tracking-[0.2em] transition-all ${activeTab === tab.id ? "text-teal-600" : "text-stone-300 hover:text-stone-600"}`}>
                            <span className={`${activeTab === tab.id ? "text-teal-600" : "text-stone-200"}`}>{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                            {activeTab === tab.id && (<motion.div layoutId="tab-underline" className="absolute bottom-0 left-6 right-6 h-0.5 bg-teal-600 rounded-full"/>)}
                        </button>))}
                </div>

                <div className="p-6 sm:p-10">
                    <AnimatePresence mode="wait">
                        {activeTab === "profile" && (<motion.div key="profile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <h2 className="text-sm font-black text-stone-800 mb-8 uppercase tracking-[0.2em]">{isEditing ? "Edit Account Details" : "Account Overview"}</h2>
                                {isEditing ? (<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                        {Object.keys(editDraft).map(key => (<div key={key} className={key === "email" ? "sm:col-span-2" : ""}>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 block">
                                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                                                </label>
                                                <input className={inputCls} value={editDraft[key]} onChange={e => setEditDraft(prev => ({ ...prev, [key]: e.target.value }))}/>
                                            </div>))}
                                    </div>) : (<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                                        {[
                    { label: "Full Name", value: profile.name },
                    { label: "Username", value: profile.username },
                    { label: "Email", value: profile.email },
                    { label: "Phone", value: profile.phone },
                    { label: "Location", value: profile.location },
                    { label: "Member Since", value: "January 2023" },
                ].map((f, i) => (<div key={i} className="p-6 bg-[#fffafa]/30 rounded-[1.25rem] border border-stone-100 hover:border-slate-300 transition-all duration-300">
                                                <p className="text-[8px] font-black text-stone-400 uppercase tracking-[0.2em] mb-2">{f.label}</p>
                                                <p className="text-sm font-black text-stone-800">{f.value}</p>
                                            </div>))}
                                    </div>)}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-8 bg-teal-50 border border-teal-100 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left group hover:scale-[1.02] transition-transform">
                                        <p className="text-[9px] font-black text-teal-400 uppercase tracking-widest mb-2">Loyalty Points</p>
                                        <p className="text-4xl font-black text-teal-600 tracking-tighter">1,240</p>
                                    </div>
                                    <div className="p-8 bg-stone-50 border border-stone-100 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left group hover:scale-[1.02] transition-transform">
                                        <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-2">Total Orders</p>
                                        <p className="text-4xl font-black text-stone-800 tracking-tighter">4</p>
                                    </div>
                                </div>
                            </motion.div>)}

                        {activeTab === "settings" && (<motion.div key="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <h2 className="text-sm font-black text-stone-800 mb-8 uppercase tracking-[0.2em]">Security & Privacy</h2>
                                <div className="space-y-3">
                                    {[
                { key: "push", icon: <Bell size={18}/>, title: "Push Notifications", desc: "Alerts for orders and offers" },
                { key: "twofa", icon: <Shield size={18}/>, title: "Two-Factor Auth", desc: "Extra security for your account" },
                { key: "billing", icon: <CreditCard size={18}/>, title: "Billing Alerts", desc: "Notify me of payment activity" },
            ].map(item => {
                const isOn = notifications[item.key];
                return (<div key={item.key} className="flex items-center gap-6 p-6 bg-stone-50/30 rounded-2xl border border-stone-100 transition-all group">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-stone-100 bg-white text-stone-400 group-hover:text-slate-900 transition-colors`}>{item.icon}</div>
                                                <div className="flex-1">
                                                    <p className="font-black text-stone-800 text-xs uppercase tracking-widest mb-1">{item.title}</p>
                                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{item.desc}</p>
                                                </div>
                                                <button onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))} className={`relative w-12 h-6 rounded-full transition-all duration-300 ${isOn ? "bg-teal-600" : "bg-stone-200"}`}>
                                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isOn ? "left-7" : "left-1"}`}/>
                                                </button>
                                            </div>);
            })}
                                </div>                            </motion.div>)}

                        {activeTab === "orders" && (<motion.div key="orders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <h2 className="text-sm font-black text-stone-800 mb-8 uppercase tracking-[0.2em]">Recent Activity</h2>
                                <div className="space-y-3">
                                    {orders.map(order => (<div key={order.id} className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-stone-50/30 rounded-2xl border border-stone-100 transition-all">
                                            <div className="text-center sm:text-left">
                                                <p className="text-base font-black text-stone-800 mb-1">{order.id}</p>
                                                <p className="text-[9px] text-stone-400 font-black uppercase tracking-[0.2em]">{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</p>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest ${statusStyle[order.status]}`}>{order.status}</span>
                                            <p className="font-black text-stone-800 text-xl tracking-tighter">Rs. {order.amount.toLocaleString()}</p>
                                        </div>))}
                                </div>
                                <div className="mt-10 grid grid-cols-2 gap-6 p-8 bg-stone-50 rounded-2xl border border-stone-100">
                                    <div className="text-center sm:text-left">
                                        <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-2">Total Spent</p>
                                        <p className="text-3xl font-black text-stone-800 tracking-tighter">Rs. {orders.reduce((s, o) => s + o.amount, 0).toLocaleString()}</p>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-2">Success Rate</p>
                                        <p className="text-3xl font-black text-teal-600 tracking-tighter">{Math.round((orders.filter(o => o.status === "Delivered").length / orders.length) * 100)}%</p>
                                    </div>
                                </div>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </ProjectPageLayout>);
}
