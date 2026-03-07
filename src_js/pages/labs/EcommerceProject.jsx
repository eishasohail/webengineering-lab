import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Star, Heart, ArrowRight, CreditCard, ChevronLeft, ShieldCheck, Truck } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
export default function EcommerceProject() {
    const [cartCount, setCartCount] = useState(0);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [showCheckout, setShowCheckout] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const resetStore = () => {
        setCartCount(0);
        setShowCheckout(false);
        setShowSuccess(false);
    };
    const WALNUT = "#78350f";
    const TERRACOTTA = "#a44a3f";
    const products = [
        { id: 1, name: "Mid-Century Modern Chair", price: 299, rating: 4.8, category: "Furniture", image: "🪑", tag: "Legacy" },
        { id: 2, name: "Minimalist Brass Table Lamp", price: 89, rating: 4.5, category: "Lighting", image: "💡", tag: "New" },
        { id: 3, name: "Geometric Wool Rug", price: 450, rating: 4.9, category: "Decor", image: "🧶", tag: "Handmade" },
        { id: 4, name: "Velvet Accent Sofa", price: 899, rating: 4.7, category: "Furniture", image: "🛋️", tag: "Choice" },
        { id: 5, name: "Matte Ceramic Vase Set", price: 45, rating: 4.3, category: "Decor", image: "🏺", tag: "Popular" },
        { id: 6, name: "Smart Dimmable Bulb", price: 25, rating: 4.6, category: "Lighting", image: "🕯️", tag: "Essential" },
    ];
    if (showCheckout) {
        return (<ProjectPageLayout title="Secure Checkout" subtitle="Project #06: Multi-page e-commerce." maxWidth="max-w-4xl" showCard={false} containerClassName="bg-[#fdfcfb]" backHoverColor="hover:text-[#78350f]" rightElement={<button onClick={() => setShowCheckout(false)} className="p-4 bg-white text-[#78350f] rounded-2xl shadow-xl shadow-stone-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 font-black text-[10px] uppercase tracking-widest">
                        <ChevronLeft size={18}/> Continue Shopping
                    </button>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16 relative">
                    <AnimatePresence>
                        {showSuccess && (<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/60 backdrop-blur-sm rounded-[2.5rem]">
                                <div className="bg-[#78350f] text-white p-12 rounded-[3.5rem] text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.6)] max-w-sm w-full border border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a44a3f] to-transparent opacity-50"/>
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#a44a3f] to-[#78350f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-900/40 border-4 border-white/10">
                                        <ShieldCheck size={36} className="text-white"/>
                                    </div>
                                    <h2 className="text-2xl font-black mb-3 tracking-tighter uppercase italic">Order Placed</h2>
                                    <p className="text-stone-400 font-bold mb-10 text-[11px] tracking-[0.1em] uppercase leading-relaxed opacity-80">Your curated collection has been secured. Check your email for details.</p>
                                    <button onClick={resetStore} className="w-full py-5 bg-white text-[#78350f] rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#a44a3f] hover:text-white hover:scale-[1.02] transition-all active:scale-95 shadow-2xl shadow-black/40">
                                        Return to Shop
                                    </button>
                                </div>
                            </motion.div>)}
                    </AnimatePresence>
                    <div className="space-y-8 bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-2xl shadow-stone-200/40">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 bg-[#78350f] text-white rounded-2xl"><CreditCard size={24}/></div>
                            <div>
                                <h2 className="text-xl font-black text-[#78350f] tracking-tight">Payment Detail</h2>
                                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Secured Global Protocol</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block">
                                <span className="text-[9px] font-black text-[#a44a3f] uppercase tracking-[0.2em] mb-2 block">Cardholder Name</span>
                                <input type="text" placeholder="John Doe" className="walnut-input w-full px-6 py-4 bg-stone-50 rounded-2xl outline-none font-bold text-[#78350f] transition-all placeholder:text-stone-300"/>
                            </label>
                            <label className="block">
                                <span className="text-[9px] font-black text-[#a44a3f] uppercase tracking-[0.2em] mb-2 block">Card Number</span>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="walnut-input w-full px-6 py-4 bg-stone-50 rounded-2xl outline-none font-bold text-[#78350f] transition-all placeholder:text-stone-300"/>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="text-[9px] font-black text-[#a44a3f] uppercase tracking-[0.2em] mb-2 block">Expiry Date</span>
                                    <input type="text" placeholder="MM/YY" className="walnut-input w-full px-6 py-4 bg-stone-50 rounded-2xl outline-none font-bold text-[#78350f] transition-all placeholder:text-stone-300"/>
                                </label>
                                <label className="block">
                                    <span className="text-[9px] font-black text-[#a44a3f] uppercase tracking-[0.2em] mb-2 block">CVV</span>
                                    <input type="text" placeholder="***" className="walnut-input w-full px-6 py-4 bg-stone-50 rounded-2xl outline-none font-bold text-[#78350f] transition-all placeholder:text-stone-300"/>
                                </label>
                            </div>
                        </div>

                        <button onClick={() => setShowSuccess(true)} className="w-full py-6 bg-[#78350f] text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-[#a44a3f] shadow-2xl shadow-stone-200 transition-all active:scale-95 flex items-center justify-center gap-4 focus-visible:ring-4 focus-visible:ring-[#78350f]/20 outline-none">
                            Complete Order <ArrowRight size={18}/>
                        </button>
                    </div>

                    <div className="space-y-8 py-10">
                        <style>{`
                    .walnut-input {
                        border: 1px solid rgba(120, 53, 15, 0.2) !important;
                        outline: none !important;
                    }
                    .walnut-input:focus {
                        border-color: rgba(120, 53, 15, 0.5) !important;
                        box-shadow: 0 0 0 4px rgba(120, 53, 15, 0.1) !important;
                        outline: none !important;
                    }
                `}</style>
                        <h2 className="text-xl font-black text-[#78350f] tracking-tight mb-8">Summary</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between py-4 border-b border-stone-100">
                                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Base Rate ({cartCount} units)</span>
                                <span className="text-lg font-black text-[#78350f] tracking-tight">$ {cartCount * 299}</span>
                            </div>
                            <div className="flex items-center justify-between py-4 border-b border-stone-100">
                                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Global Express</span>
                                <span className="text-[10px] font-black text-[#a44a3f] uppercase tracking-widest italic">Complimentary</span>
                            </div>
                            <div className="flex items-center justify-between pt-8">
                                <span className="text-sm font-black text-[#78350f] uppercase tracking-widest">Total Amount</span>
                                <span className="text-4xl font-black text-[#78350f] tracking-tighter">$ {cartCount * 299}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-stone-50 text-center shadow-lg shadow-stone-100/40">
                                <ShieldCheck className="text-[#a44a3f]" size={24}/>
                                <span className="text-[8px] font-black text-[#78350f] uppercase tracking-widest">Verified Vault</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-stone-50 text-center shadow-lg shadow-stone-100/40">
                                <Truck className="text-[#a44a3f]" size={24}/>
                                <span className="text-[8px] font-black text-[#78350f] uppercase tracking-widest">Global Priority</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ProjectPageLayout>);
    }
    return (<ProjectPageLayout title="Home Haven Store" subtitle="Project #06: Multi-page e-commerce." maxWidth="max-w-7xl" showCard={false} containerClassName="bg-white" backHoverColor="hover:text-[#78350f]" rightElement={<button onClick={() => setShowCheckout(true)} className="relative p-5 bg-[#78350f] text-white rounded-2xl shadow-2xl shadow-stone-200 hover:scale-110 active:scale-90 transition-all group focus-visible:ring-4 focus-visible:ring-[#78350f]/20 outline-none">
                    <ShoppingCart size={24}/>
                    {cartCount > 0 && (<span className="absolute -top-2 -right-2 bg-[#a44a3f] text-white text-[9px] font-black min-w-[22px] h-[22px] rounded-full flex items-center justify-center border-[2.5px] border-white shadow-lg px-0.5">
                            {cartCount}
                        </span>)}
                </button>}>
            <style>{`
                .walnut-input {
                    border: 1px solid rgba(44, 24, 16, 0.2) !important;
                    outline: none !important;
                }
                .walnut-input:focus {
                    border-color: rgba(44, 24, 16, 0.5) !important;
                    box-shadow: 0 0 0 4px rgba(44, 24, 16, 0.1) !important;
                    outline: none !important;
                }
            `}</style>
            {/* Store Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 mt-8">
                <div className="relative overflow-hidden group">
                    <input type="text" placeholder="Search collection..." value={search} onChange={(e) => setSearch(e.target.value)} className="walnut-input w-full pl-14 pr-8 py-5 bg-stone-50 rounded-2xl outline-none font-bold text-[#78350f] transition-all placeholder:text-stone-300"/>
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={20}/>
                </div>
                <div className="md:col-span-3 flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {["All", "Furniture", "Lighting", "Decor"].map(cat => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all whitespace-nowrap active:scale-95 border focus-visible:ring-4 focus-visible:ring-[#78350f]/20 outline-none ${activeCategory === cat ? "bg-[#78350f] text-white border-[#78350f] shadow-xl shadow-stone-200" : "bg-white text-stone-400 border-stone-100 hover:border-slate-300"}`}>
                            {cat}
                        </button>))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
            .filter(p => (activeCategory === "All" || p.category === activeCategory) && p.name.toLowerCase().includes(search.toLowerCase()))
            .map(product => (<motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="group bg-white rounded-[2.5rem] overflow-hidden border border-stone-50 hover:shadow-2xl hover:shadow-stone-200 transition-all duration-500 flex flex-col">
                            <div className="h-72 bg-[#fdfcfb] flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-700 relative">
                                {product.image}
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white shadow-sm rounded-full text-[9px] font-black text-[#a44a3f] uppercase tracking-widest border border-stone-50">
                                    {product.tag}
                                </div>
                                <button className="absolute top-6 right-6 p-3 bg-white rounded-2xl text-stone-200 hover:text-[#a44a3f] hover:shadow-lg transition-all">
                                    <Heart size={18}/>
                                </button>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black text-[#a44a3f] uppercase tracking-widest opacity-60">{product.category}</span>
                                    <div className="flex items-center gap-1">
                                        <Star size={12} className="fill-amber-400 text-amber-400"/>
                                        <span className="text-xs font-black text-[#78350f]">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-[#78350f] mb-6 group-hover:text-[#a44a3f] transition-colors tracking-tight">{product.name}</h3>
                                <div className="flex items-center justify-between pt-6 border-t border-stone-50 mt-auto">
                                    <span className="text-2xl font-black text-[#78350f] tracking-tight">${product.price}</span>
                                    <button onClick={() => setCartCount(c => c + 1)} className="px-6 py-3 bg-[#78350f] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#a44a3f] transition-all active:scale-95 shadow-xl shadow-stone-100 focus-visible:ring-4 focus-visible:ring-[#78350f]/20 outline-none">
                                        Add to Bag
                                    </button>
                                </div>
                            </div>
                        </motion.div>))}
            </div>

            {/* Minimalist Footer */}
            <div className="mt-24 mb-20 pt-20 border-t border-stone-100 text-center">
                <span className="text-[11px] font-black text-stone-400 uppercase tracking-[0.6em]">Curated Heritage Collections</span>
                <p className="mt-6 text-[10px] font-bold text-stone-300 uppercase tracking-widest leading-loose">
                    © 2026 Home Haven Store Interior Dynamics • Established in Sophistication
                </p>
            </div>
        </ProjectPageLayout>);
}
