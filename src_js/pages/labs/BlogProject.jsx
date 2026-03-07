import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Share2, Heart, ChevronLeft } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
export default function BlogProject() {
    const [selectedStory, setSelectedStory] = useState(null);
    const stories = [
        {
            id: 1,
            title: "The Ancient Olive Groves of Jenin",
            excerpt: "Discover the thousand-year-old traditions of olive harvesting and the resilience of Palestinian farmers...",
            content: "The olive tree is more than just a source of oil in Palestine; it is a symbol of steadfastness (Sumud). For generations, families have gathered under the silver-green leaves to harvest the liquid gold that sustains their way of life. Despite the challenges, these ancient groves continue to flourish, deeply rooted in the soil and history of the land.",
            category: "Heritage",
            author: "Amina Al-Masri",
            date: "Jan 12, 2025",
            readTime: "6 min read",
            image: "🫒",
            color: "text-emerald-600 bg-emerald-50",
        },
        {
            id: 2,
            title: "Tatreez: The Art of Identity",
            excerpt: "How traditional Palestinian embroidery tells the story of villages, regions, and families through every stitch...",
            content: "Every pattern in Tatreez tells a unique story. From the cypress trees of Jaffa to the roses of Jericho, the intricate embroidery on a thobe is a historical record of Palestinian life. Today, a new generation of artists is revitalizing this ancient craft, blending traditional motifs with modern fashion to keep their heritage alive.",
            category: "Culture",
            author: "Hassan Khalil",
            date: "Jan 10, 2025",
            readTime: "8 min read",
            image: "🧵",
            color: "text-rose-600 bg-rose-50",
        },
        {
            id: 3,
            title: "The Architecture of Old Jerusalem",
            excerpt: "Exploring the limestone walls, hidden courtyards, and timeless soul of the Holy City's residential quarters...",
            content: "Jerusalem's architecture is a tapestry of civilizations. The golden limestone buildings, connected by narrow alleys and arched doorways, create a living museum. To walk through the Old City is to traverse centuries of history, where every stone has a name and every courtyard resonates with the echoes of the past.",
            category: "Architecture",
            author: "Layla Zaid",
            date: "Jan 05, 2025",
            readTime: "10 min read",
            image: "🏰",
            color: "text-amber-600 bg-amber-50",
        },
    ];
    return (<ProjectPageLayout title="Palestine Stories" subtitle="Project #11: Blog mini-app with routing." maxWidth="max-w-7xl" showCard={false} containerClassName="bg-[#f0fdf4]" backHoverColor="hover:text-emerald-600">
            <AnimatePresence mode="wait">
                {!selectedStory ? (<motion.div key="list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map(story => (<motion.article key={story.id} layoutId={`story-${story.id}`} onClick={() => setSelectedStory(story)} className="group bg-white rounded-[2.5rem] overflow-hidden border border-emerald-200 hover:shadow-2xl shadow-emerald-900/10 transition-all cursor-pointer flex flex-col h-full active:scale-[0.98]">
                                <div className="h-64 bg-emerald-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-700">
                                    {story.image}
                                </div>
                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${story.color}`}>
                                            {story.category}
                                        </span>
                                        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{story.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4 group-hover:text-emerald-600 transition-colors">{story.title}</h3>
                                    <p className="text-gray-500 font-normal leading-relaxed mb-8 flex-1">{story.excerpt}</p>
                                    <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                                                {story.author[0]}
                                            </div>
                                            <span className="text-sm font-semibold text-gray-600">{story.author}</span>
                                        </div>
                                        <span className="text-emerald-500 flex items-center gap-2 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                            Read More <ArrowRight size={14}/>
                                        </span>
                                    </div>
                                </div>
                            </motion.article>))}
                    </motion.div>) : (<motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, y: 20 }} className="max-w-4xl mx-auto">
                        <button onClick={() => setSelectedStory(null)} className="flex items-center gap-2 text-xs font-black text-emerald-600 mb-10 hover:gap-4 transition-all uppercase tracking-[0.2em]">
                            <ChevronLeft size={16}/> All Stories
                        </button>

                        <article className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-900/[0.05] border border-emerald-200">
                            <div className="h-80 bg-emerald-50 flex items-center justify-center text-9xl">
                                {selectedStory.image}
                            </div>
                            <div className="p-10 sm:p-20">
                                <div className="flex items-center gap-4 mb-10">
                                    <span className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${selectedStory.color}`}>
                                        {selectedStory.category}
                                    </span>
                                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{selectedStory.date}</span>
                                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{selectedStory.readTime}</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] mb-8 leading-tight">{selectedStory.title}</h1>
                                <div className="flex items-center gap-4 mb-12 py-6 border-y border-gray-50">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                                        {selectedStory.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#0f172a] uppercase tracking-widest text-xs">Written by</p>
                                        <p className="text-gray-500 font-semibold">{selectedStory.author}</p>
                                    </div>
                                    <div className="ml-auto flex gap-3">
                                        <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all"><Share2 size={18}/></button>
                                        <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-all"><Heart size={18}/></button>
                                    </div>
                                </div>
                                <div className="prose prose-emerald max-w-none">
                                    <p className="text-xl sm:text-2xl text-emerald-700/80 font-bold italic mb-10 leading-relaxed border-l-4 border-emerald-500 pl-8">
                                        "{selectedStory.excerpt.replace("...", "")}"
                                    </p>
                                    <div className="text-lg text-gray-600 font-normal leading-[2] space-y-8">
                                        {selectedStory.content}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </motion.div>)}
            </AnimatePresence>
        </ProjectPageLayout>);
}
