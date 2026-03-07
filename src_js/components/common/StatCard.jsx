import React from "react";
import { motion } from "framer-motion";
export default function StatCard({ label, value, icon, valueColor = "text-[#002B5B]", iconBg = "bg-slate-50 border-slate-100", iconColor = "text-[#002B5B]", }) {
    return (<motion.div whileHover={{ y: -5 }} className="bg-white p-7 rounded-[2.5rem] border border-white shadow-xl shadow-slate-900/[0.02] flex items-center justify-between group transition-all">
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1.5">
                    {label}
                </p>
                <p className={`text-4xl font-extrabold tracking-tight ${valueColor}`}>{value}</p>
            </div>
            {icon && (<div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white shadow-sm transition-all group-hover:scale-110 group-hover:rotate-3 ${iconBg} ${iconColor}`}>
                    {React.cloneElement(icon, { size: 24 })}
                </div>)}
        </motion.div>);
}
