import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Hash, ListTodo, UserPlus, ShoppingBag, TableProperties, ShoppingCart, GraduationCap, Thermometer, Trello, FileText, School, Sparkles } from "lucide-react";
import LabCard from "../components/common/LabCard";
export default function Dashboard() {
    const projects = [
        { id: 1, designation: "Project #01", title: "Counter Hub", aesthetic: "Counter History", description: "Counter with history log.", icon: <Hash />, path: "/project/counter", color: "bg-blue-500", hoverColor: "#3b82f6" },
        { id: 2, designation: "Project #02", title: "Task Manager Pro", aesthetic: "Todo Application", description: "CRUD operations.", icon: <ListTodo />, path: "/project/todo", color: "bg-teal-500" },
        { id: 3, designation: "Project #03", title: "Profile Registry", aesthetic: "User Registration", description: "User registration and display.", icon: <UserPlus />, path: "/project/registration", color: "bg-purple-600", hoverColor: "#9333ea" },
        { id: 4, designation: "Project #04", title: "Cyber Catalog", aesthetic: "Product Showcase", description: "Product catalog with search.", icon: <ShoppingBag />, path: "/project/catalog", color: "bg-indigo-500", hoverColor: "#6366f1" },
        { id: 5, designation: "Project #05", title: "Performance Portal", aesthetic: "Student Marks Table", description: "Data table with sort and filter.", icon: <TableProperties />, path: "/project/marks", color: "#0f172a", hoverColor: "#0f172a" },
        { id: 6, designation: "Project #06", title: "Home Haven Store", aesthetic: "E-commerce Interface", description: "Multi-page e-commerce.", icon: <ShoppingCart />, path: "/project/ecommerce", color: "bg-amber-900", hoverColor: "#78350f" },
        { id: 7, designation: "Project #07", title: "React Quiz", aesthetic: "Quiz Application", description: "Interactive quiz application.", icon: <GraduationCap />, path: "/project/quiz", color: "#800020", hoverColor: "#800020" },
        { id: 8, designation: "Project #08", title: "Celsius Flow", aesthetic: "Temperature Converter", description: "Temperature converter.", icon: <Thermometer />, path: "/project/temp", color: "#06b6d4", hoverColor: "#06b6d4" },
        { id: 9, designation: "Project #09", title: "Beauty Bag", aesthetic: "Shopping Cart", description: "Shopping cart management.", icon: <ShoppingCart />, path: "/project/cart", color: "bg-pink-500", hoverColor: "#ec4899" },
        { id: 10, designation: "Project #10", title: "Account Dashboard", aesthetic: "Dashboard with tabs", description: "Dashboard with tabs.", icon: <Trello />, path: "/project/tabs", color: "bg-teal-600", hoverColor: "#0d9488" },
        { id: 11, designation: "Project #11", title: "Palestine Stories", aesthetic: "Blog Mini-App", description: "Blog mini-app with routing.", icon: <FileText />, path: "/project/blog", color: "bg-green-700", hoverColor: "#10b981" },
        { id: 12, designation: "Project #12", title: "NED University Portal", aesthetic: "University Portal", description: "Full integration project.", icon: <School />, path: "/project/university", color: "#002B5B", hoverColor: "#002B5B" },
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (<div className="min-h-screen bg-[#f8fafc] p-6 sm:p-10 lg:p-16 font-sans overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 gap-10">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-700 shadow-xl shadow-teal-900/5">
                                <LayoutDashboard size={24}/>
                            </div>
                            <span className="text-[10px] sm:text-xs font-black text-teal-700 uppercase tracking-[0.4em]">Interactive Labs</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-none mb-4 uppercase">
                            Web Engineering <span className="text-teal-700">Projects</span>
                        </h1>
                        <p className="text-slate-500 font-bold text-sm sm:text-base max-w-lg tracking-wide leading-relaxed">
                            A complete suite of 12 independent practice applications built to solidify React fundamentals, dynamic state management, and component architecture.
                        </p>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-3 order-first sm:order-none mb-10 sm:mb-0">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-teal-900/[0.05] group hover:scale-105 transition-transform duration-500 cursor-default">
                            <Sparkles className="text-teal-700 animate-pulse" size={20}/>
                            <div className="flex flex-col">
                                <span className="text-xl font-black text-[#0f172a] leading-none">12</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Application Labs</span>
                            </div>
                        </div>
                    </div>
                </header>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" variants={containerVariants} initial="hidden" animate="visible">
                    {projects.map((project) => (<LabCard key={project.id} project={project} variants={itemVariants}/>))}
                </motion.div>

                <footer className="mt-24 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Architecture</span>
                        <span className="text-xs font-black text-[#0f172a] uppercase tracking-widest">Built with React + Vite + Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-black text-teal-700 uppercase tracking-widest leading-none">All Systems Responsive</span>
                    </div>
                </footer>
            </div>
        </div>);
}
