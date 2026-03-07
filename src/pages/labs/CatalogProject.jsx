import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Search, Cpu, Globe, Zap, ArrowRight, Server, Database, Fingerprint } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";












export default function CatalogProject() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Privacy", "Identity", "Security", "Network"];

  const products = [
  { id: 1, name: "Neural Guard VPN", category: "Privacy", price: "$12.99/mo", description: "Military-grade encryption with zero-log policy across 60 countries.", icon: <Shield />, stats: "256-bit AES", level: "Elite" },
  { id: 2, name: "Quantum Lock", category: "Identity", price: "$49.00/yr", description: "Universal 2FA with biometric injection and hardware key support.", icon: <Lock />, stats: "99.9% Uptime", level: "Advanced" },
  { id: 3, name: "Data Purge v4", category: "Security", price: "$29.00", description: "Automated sensitive data destruction with forensic-grade reliability.", icon: <Zap />, stats: "Instant Wipe", level: "Essential" },
  { id: 4, name: "Deep Scan Pro", category: "Network", price: "$199/yr", description: "Real-time vulnerability assessment for enterprise architectures.", icon: <Cpu />, stats: "AI Driven", level: "Elite" },
  { id: 5, name: "Ghost Node", category: "Network", price: "$15.00/mo", description: "Decentralized relay points for anonymous packet transmission.", icon: <Globe />, stats: "Low Latency", level: "Advanced" },
  { id: 6, name: "Bio-Vault X", category: "Identity", price: "$89.00", description: "Stored biometric hashes with decentralized verification nodes.", icon: <Fingerprint />, stats: "Immutable", level: "Elite" }];


  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ProjectPageLayout
      title="Cyber Catalog"
      subtitle="Project #04: Product catalog with search."
      maxWidth="max-w-7xl"
      showCard={false}
      containerClassName="bg-[#f8fafc]"
      backHoverColor="hover:text-indigo-500">
      
            <div className="mb-20 space-y-10">
                {/* Search Bar */}
                <div className="relative group max-w-2xl mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-[0.15] group-focus-within:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                        <input
              type="text"
              placeholder="Initialize security scan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-6 bg-white rounded-[2rem] outline-none border border-indigo-100 focus:border-indigo-500 font-black text-slate-800 placeholder:text-slate-300 transition-all shadow-2xl shadow-indigo-500/10" />
            
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-indigo-300 group-focus-within:text-indigo-500 transition-colors" size={22} />
                        {search &&
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest px-2">Scanning</span>
                            </div>
            }
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat ?
            "bg-[#0f172a] border-[#0f172a] text-white shadow-xl shadow-slate-900/20 scale-105" :
            "bg-white border-indigo-50 text-slate-400 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50"}`
            }>
            
                            {cat}
                        </button>
          )}
                </div>
            </div>

            <motion.div
        layout
        className="min-h-[600px]">
        
                <AnimatePresence mode="popLayout" initial={false}>
                    {filteredProducts.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredProducts.map((product) =>
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group p-10 rounded-[3.5rem] bg-white border-2 border-white hover:border-indigo-500/20 transition-all duration-500 cursor-pointer flex flex-col relative overflow-hidden h-[520px] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-3">
              
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                                    <div className="flex items-start justify-between mb-10">
                                        <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-indigo-500 group-hover:bg-[#0f172a] group-hover:text-indigo-400 group-hover:border-[#0f172a] transition-all duration-500 group-hover:rotate-[15deg]">
                                            {React.cloneElement(product.icon, { size: 36, strokeWidth: 2 })}
                                        </div>
                                        <div className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl flex items-center gap-2 ${product.level === "Elite" ? "text-amber-600 bg-amber-50" :
                product.level === "Advanced" ? "text-indigo-600 bg-indigo-50" :
                "text-slate-500 bg-slate-50"}`
                }>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                            {product.level}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 block leading-none">{product.category} Module</span>
                                        <h3 className="text-3xl font-black text-[#0f172a] mb-5 tracking-tight group-hover:text-indigo-600 transition-colors uppercase leading-[0.9]">{product.name}</h3>
                                        <p className="text-slate-400 font-bold text-base leading-[1.8] line-clamp-3 group-hover:text-slate-600 transition-colors">{product.description}</p>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-indigo-50 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] block mb-1">Enc Level: {product.stats}</span>
                                            <div className="text-2xl font-black text-[#0f172a] group-hover:text-indigo-600 transition-colors">{product.price}</div>
                                        </div>
                                        <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-[#0f172a] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20 group-hover:bg-indigo-600 transition-colors">
                  
                                            <ArrowRight size={24} strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                </motion.div>
            )}
                        </div> :

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-[3.5rem] p-24 border-2 border-dashed border-indigo-50 flex flex-col items-center text-center space-y-10">
            
                            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500">
                                <Search size={40} />
                            </div>
                            <div className="max-w-md">
                                <h3 className="text-3xl font-black text-[#0f172a] mb-4 uppercase tracking-tighter">Access Denied</h3>
                                <p className="text-slate-400 font-bold leading-relaxed">System scan failed to identify security modules matching your current parameters.</p>
                            </div>
                            <button
              onClick={() => {setSearch("");setActiveCategory("All");}}
              className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-indigo-600/20 hover:scale-105 transition-transform">
              
                                Reset System Scan
                            </button>
                        </motion.div>
          }
                </AnimatePresence>
            </motion.div>

            <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
                {[
        { icon: <Server size={24} />, title: "Network Nodes", val: "Global / 2,491", color: "text-indigo-500" },
        { icon: <Database size={24} />, title: "Secure Vaults", val: "Locked / Tier IV", color: "text-purple-500" },
        { icon: <Shield size={24} />, title: "Protocol", val: "IPSec v3 / OK", color: "text-emerald-500" },
        { icon: <Fingerprint size={24} />, title: "Auth Status", val: "Verified", color: "text-violet-500" }].
        map((stat, i) =>
        <div key={i} className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-purple-100 rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500" />
                        <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-6 group-hover:border-indigo-500/20 transition-all">
                            <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <div>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] block mb-1.5">{stat.title}</span>
                                <span className="text-sm font-black text-[#0f172a] uppercase tracking-widest">{stat.val}</span>
                            </div>
                        </div>
                    </div>
        )}
            </div>
        </ProjectPageLayout>);

}