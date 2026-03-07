import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function LabCard({ project, variants }) {
    const isSlate = project.color.includes("slate") || project.color.startsWith("#");
    const backgroundColor = project.color.startsWith("#") ? project.color : undefined;
    const bgClassName = !project.color.startsWith("#") ? project.color : "";
    return (<motion.div variants={variants} className="h-full">
            <Link to={project.path} className="group block p-8 bg-white rounded-[2.5rem] border border-gray-200 shadow-2xl shadow-blue-900/[0.02] hover:shadow-2xl hover:shadow-[#002366]/[0.06] transition-all hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-500 ${bgClassName}`} style={backgroundColor ? { backgroundColor } : {}}/>

                <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${bgClassName}`} style={backgroundColor ? { backgroundColor, boxShadow: `0 20px 25px -5px ${backgroundColor}33` } : {}}>
                        {React.cloneElement(project.icon, { size: 28 })}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mb-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: project.hoverColor || "#14B8A6" }}>
                            {project.aesthetic}
                        </span>
                        <h3 className="text-2xl font-black text-[#0f172a] tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500">
                            {project.title}
                        </h3>
                    </div>

                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-6 mt-auto">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        {project.designation}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ color: project.hoverColor || "#14B8A6" }}>
                        View System <ArrowRight size={14}/>
                    </div>
                </div>
            </Link>
        </motion.div>);
}
