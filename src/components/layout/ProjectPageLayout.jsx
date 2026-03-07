import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";













export default function ProjectPageLayout({
  children,
  title,
  subtitle,
  maxWidth = "max-w-6xl",
  rightElement,
  showCard = true,
  containerClassName = "",
  cardClassName = "",
  backHoverColor = "hover:text-[#14B8A6]"
}) {
  return (
    <div className={`min-h-screen font-sans ${containerClassName}`}>
            <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12">
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <div className="flex flex-col items-start gap-4">
                        <Link to="/" className={`inline-flex items-center gap-2 text-xs font-black text-gray-400 transition-colors group uppercase tracking-[0.2em] ${backHoverColor}`}>
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Dashboard
                        </Link>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">{title}</h1>
                            <p className="text-gray-500 font-bold text-sm sm:text-base mt-1">{subtitle}</p>
                        </div>
                    </div>
                    {rightElement}
                </header>

                <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-auto ${maxWidth}`}>
          
                    {showCard ?
          <div className={`bg-white rounded-[2.5rem] p-6 sm:p-12 shadow-2xl shadow-blue-900/[0.03] ${cardClassName}`}>
                            {children}
                        </div> :

          children
          }
                </motion.main>
            </div>
        </div>);

}