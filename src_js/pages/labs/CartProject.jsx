import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, Tag, Gift, ChevronRight, CheckCircle2, ShoppingCart } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";
const PROMO_CODES = {
    "GLAM20": 0.20,
    "BEAUTY10": 0.10,
    "STYLE15": 0.15,
};
export default function CartProject() {
    const initialItems = [
        { id: 1, name: "Velvet Lip Rouge", brand: "MAC", price: 2450, quantity: 1, category: "Lips", emoji: "💄", shade: "Ruby Woo" },
        { id: 2, name: "Dewy Glow Foundation", brand: "Fenty Beauty", price: 4800, quantity: 1, category: "Face", emoji: "✨", shade: "120N" },
        { id: 3, name: "Kohl Eye Liner", brand: "NYX", price: 1200, quantity: 1, category: "Eyes", emoji: "👁️", shade: "Pitch Black" },
    ];
    const [items, setItems] = useState(initialItems);
    const [promo, setPromo] = useState("");
    const [discount, setDiscount] = useState(0);
    const [promoStatus, setPromoStatus] = useState("idle");
    const [appliedCode, setAppliedCode] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const resetStore = () => {
        setItems([]);
        setShowSuccess(false);
        setAppliedCode("");
        setDiscount(0);
    };
    const restockItems = () => {
        setItems(initialItems);
    };
    const updateQty = (id, delta) => {
        setItems(items.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
    };
    const removeItem = (id) => {
        setItems(items.filter(i => i.id !== id));
    };
    const applyPromo = () => {
        const code = promo.toUpperCase().trim();
        if (PROMO_CODES[code]) {
            setDiscount(PROMO_CODES[code]);
            setAppliedCode(code);
            setPromoStatus("success");
            setPromo("");
        }
        else {
            setPromoStatus("error");
            setTimeout(() => setPromoStatus("idle"), 2000);
        }
    };
    const removePromo = () => {
        setDiscount(0);
        setAppliedCode("");
        setPromoStatus("idle");
    };
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const discountAmt = subtotal * discount;
    const total = subtotal - discountAmt;
    const fmt = (n) => `Rs. ${n.toLocaleString("en-PK")}`;
    const categoryColors = {
        Lips: "bg-rose-50 text-rose-500 border-rose-100",
        Face: "bg-amber-50 text-amber-500 border-amber-100",
        Eyes: "bg-purple-50 text-purple-500 border-purple-100",
    };
    return (<ProjectPageLayout title="Beauty Bag" subtitle="Project #09: Shopping cart management." maxWidth="max-w-7xl" showCard={false} containerClassName="bg-[#fffcfc]" backHoverColor="hover:text-pink-500">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
                {/* Cart Items */}
                <div className="flex-1">
                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {items.length === 0 ? (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-rose-100 flex flex-col items-center">
                                    <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                        <ShoppingCart size={32} className="text-rose-300"/>
                                    </div>
                                    <h4 className="text-xl font-black text-[#1a1a1a] mb-2">Beautifully Empty</h4>
                                    <p className="font-bold text-stone-500 text-[10px] uppercase tracking-[0.2em] mb-10 max-w-[200px] leading-relaxed">Discover your next signature shade to fill your bag.</p>
                                    <button onClick={restockItems} className="px-10 py-5 bg-[#1a1a1a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-rose-500 transition-all active:scale-95 shadow-lg shadow-stone-100">
                                        Restock Collection
                                    </button>
                                </motion.div>) : (items.map(item => (<motion.div key={item.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-white rounded-[2rem] border-2 border-stone-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-900/[0.02] transition-all duration-500 relative group">
                                        <div className="w-24 h-24 rounded-2xl bg-[#fffafa] border-2 border-rose-50 flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                                            {item.emoji}
                                        </div>
                                        <div className="flex-1 min-w-0 text-center sm:text-left">
                                            <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                                                <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${categoryColors[item.category]?.split(' ')[1] || "text-rose-400"}`}>{item.category}</span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                                                <span className="text-[8px] font-black text-stone-500 uppercase tracking-[0.2em]">{item.brand}</span>
                                            </div>
                                            <h4 className="text-lg font-black text-[#1a1a1a] tracking-tight">{item.name}</h4>
                                            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-0.5">Shade: <span className="text-stone-800">{item.shade}</span></p>
                                            <p className="text-xl font-black text-rose-400 mt-4 tracking-tighter">{fmt(item.price)}</p>
                                        </div>

                                        <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-8 w-full sm:w-auto pt-8 sm:pt-0 border-t sm:border-t-0 border-stone-50">
                                            <div className="flex items-center gap-5 bg-stone-50 rounded-xl px-4 py-2 border-2 border-stone-100 mx-auto sm:mx-0">
                                                <button onClick={() => updateQty(item.id, -1)} className="text-stone-400 hover:text-rose-500 transition-colors"><Minus size={14} strokeWidth={4}/></button>
                                                <span className="w-4 text-center font-black text-[#1a1a1a] text-sm tabular-nums">{item.quantity}</span>
                                                <button onClick={() => updateQty(item.id, 1)} className="text-stone-400 hover:text-rose-500 transition-colors"><Plus size={14} strokeWidth={4}/></button>
                                            </div>
                                            <div className="text-right flex-shrink-0 hidden sm:block min-w-[100px]">
                                                <p className="text-[8px] font-black text-stone-500 uppercase tracking-[0.2em] mb-1">Subtotal</p>
                                                <p className="text-lg font-black text-[#1a1a1a] tracking-tighter">{fmt(item.price * item.quantity)}</p>
                                            </div>
                                            <button onClick={() => removeItem(item.id)} className="p-3 text-stone-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"><Trash2 size={18}/></button>
                                        </div>
                                    </motion.div>)))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Summary */}
                <div className="lg:w-96">
                    <div className="bg-white rounded-[2rem] p-10 border-2 border-stone-100 sticky top-12 shadow-2xl shadow-rose-900/[0.01]">
                        <h3 className="text-xl font-black text-[#1a1a1a] mb-10 tracking-tight">Order Summary</h3>

                        {/* Promo code */}
                        {!appliedCode ? (<div className="mb-8">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Tag size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"/>
                                        <style>{`
                                            .promo-input:focus {
                                                border-color: #fb7185 !important;
                                                box-shadow: 0 0 0 4px rgba(251, 113, 133, 0.1) !important;
                                                outline: none !important;
                                            }
                                        `}</style>
                                        <input type="text" value={promo} onChange={e => { setPromo(e.target.value); setPromoStatus("idle"); }} onKeyDown={e => e.key === "Enter" && applyPromo()} placeholder="Code: GLAM20" className={`promo-input w-full pl-10 pr-4 py-4 bg-stone-50 border rounded-xl text-xs font-bold outline-none transition-all placeholder:text-stone-400 ${promoStatus === "error" ? "border-red-200" : "border-stone-200"}`}/>
                                    </div>
                                    <button onClick={applyPromo} className="px-6 py-4 bg-[#1a1a1a] text-stone-100 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-rose-500 transition-all active:scale-95 shadow-lg shadow-stone-100">
                                        Apply
                                    </button>
                                </div>
                                {promoStatus === "error" && (<motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-black text-red-400 mt-3 ml-1 uppercase tracking-widest">
                                        ✗ Invalid code. Try GLAM20
                                    </motion.p>)}
                            </div>) : (<motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between p-4 bg-rose-50/50 border border-rose-100 rounded-2xl mb-8">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-rose-400"/>
                                    <span className="font-black text-[11px] text-rose-600 uppercase tracking-widest">{appliedCode} — {discount * 100}% OFF</span>
                                </div>
                                <button onClick={removePromo} className="text-[10px] font-black text-stone-400 hover:text-rose-600 uppercase tracking-widest transition-colors">Remove</button>
                            </motion.div>)}

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black text-stone-500 uppercase tracking-widest">Subtotal</span>
                                <span className="font-black text-[#1a1a1a]">{fmt(subtotal)}</span>
                            </div>
                            {discount > 0 && (<div className="flex items-center justify-between text-pink-500">
                                    <span className="text-xs font-black uppercase tracking-widest">Discount ({discount * 100}%)</span>
                                    <span className="font-black">- {fmt(discountAmt)}</span>
                                </div>)}
                            <div className="flex items-center justify-between text-rose-400">
                                <span className="text-xs font-black uppercase tracking-widest">Delivery</span>
                                <span className="font-black">FREE</span>
                            </div>
                        </div>

                        <div className="border-t border-stone-100 pt-8 mb-10">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.2em]">Total Amount</span>
                                <span className="text-3xl font-black text-rose-400 tracking-tighter">{fmt(total)}</span>
                            </div>
                        </div>

                        <button onClick={() => items.length > 0 && setShowSuccess(true)} className={`w-full py-6 rounded-[1.25rem] font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 active:scale-95 group shadow-xl ${items.length > 0 ? 'bg-[#1a1a1a] text-white hover:bg-rose-500 shadow-stone-200' : 'bg-stone-100 text-stone-300 cursor-not-allowed'}`}>
                            Secure Checkout <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform"/>
                        </button>

                        <div className="mt-8 flex items-center gap-4 p-6 bg-rose-50/30 rounded-[2rem] border border-rose-100/30">
                            <Gift size={20} className="text-rose-300 flex-shrink-0"/>
                            <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-relaxed">Complimentary gift wrapping on orders over Rs. 8,000! 🤍</p>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showSuccess && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-12 max-w-sm w-full text-center shadow-2xl border-4 border-rose-50">
                            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="text-rose-400" size={40} strokeWidth={1.5}/>
                            </div>
                            <h3 className="text-xl font-black text-[#1a1a1a] mb-2 tracking-tight">Order Confirmed</h3>
                            <div className="space-y-1 mb-8">
                                <p className="text-stone-400 font-bold text-[9px] uppercase tracking-[0.2em]">Ref: #BY-{Math.floor(Math.random() * 90000 + 10000)}</p>
                                <p className="text-stone-600 font-bold text-[10px] uppercase tracking-widest">Expected: Within 24 Hours</p>
                            </div>
                            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 mb-8">
                                <p className="text-[11px] font-black text-[#1a1a1a] uppercase tracking-widest">Amount Paid: {fmt(total)}</p>
                            </div>
                            <button onClick={resetStore} className="w-full py-5 bg-[#1a1a1a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-rose-500 transition-all active:scale-95 shadow-lg shadow-stone-100">
                                Continue Shopping
                            </button>
                        </motion.div>
                    </motion.div>)}
            </AnimatePresence>
        </ProjectPageLayout>);
}
