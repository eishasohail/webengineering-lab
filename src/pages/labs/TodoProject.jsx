import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle2, ClipboardList } from "lucide-react";
import ProjectPageLayout from "../../components/layout/ProjectPageLayout";







export default function TodoProject() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([{ id: Date.now(), text: input, completed: false }, ...todos]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map((t) => t.id === id ? { ...t, text: editingText } : t));
    setEditingId(null);
    setEditingText("");
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <ProjectPageLayout
      title="Task Manager Pro"
      subtitle="Project #02: CRUD operations."
      maxWidth="max-w-3xl"
      showCard={false}
      containerClassName="bg-[#f8fafc]"
      backHoverColor="hover:text-teal-500">
      
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-teal-900/[0.05] border border-teal-100 overflow-hidden flex flex-col min-h-[600px]">
                {/* Header Area */}
                <div className="bg-teal-50/50 px-10 py-12 border-b border-teal-100">
                    <h1 className="text-3xl font-black text-teal-600 tracking-tight mb-2">Workspace</h1>
                    <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Organize your daily flow</p>
                </div>

                {/* Form Section */}
                <div className="px-10 -mt-7">
                    <form onSubmit={addTodo} className="relative group">
                        <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ outline: "none" }}
              placeholder="Add a new task..."
              className="w-full h-14 pl-6 pr-16 bg-white border border-slate-200 rounded-2xl outline-none focus:outline-none focus:ring-0 focus:border-teal-500 hover:border-teal-500 transition-all font-bold text-[#0f172a] placeholder:text-slate-300 shadow-sm" />
            
                        <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 w-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all shadow-sm active:scale-95">
              
                            <Plus size={20} strokeWidth={3} />
                        </button>
                    </form>
                </div>

                {/* List Section */}
                <div className="flex-1 px-10 py-8 space-y-4 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode='popLayout'>
                        {todos.length === 0 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20">
              
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                    <ClipboardList size={24} className="text-slate-200" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Quiet day ahead</p>
                            </motion.div> :

            todos.map((todo) =>
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all ${todo.completed ? 'bg-slate-50/50 border-transparent' : 'bg-white border-slate-100 hover:border-teal-200 hover:shadow-md'}`
              }>
              
                                    {/* Custom Checkbox */}
                                    <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${todo.completed ? 'bg-emerald-400 border-emerald-400 text-white' : 'border-slate-200 hover:border-emerald-300'}`
                }>
                
                                        <CheckCircle2 size={12} strokeWidth={4} />
                                    </button>

                                    {/* Text / Editing Area */}
                                    <div className="flex-1">
                                        {editingId === todo.id ?
                <input
                  autoFocus
                  value={editingText}
                  style={{ outline: "none" }}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => saveEdit(todo.id)}
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                  className="w-full bg-teal-50 px-2 py-1 rounded-md text-sm font-bold text-[#0f172a] border border-teal-200 focus:border-teal-500 outline-none focus:ring-0" /> :


                <span className={`text-sm font-bold tracking-tight transition-all ${todo.completed ? 'text-slate-300 line-through decoration-slate-200' : 'text-[#0f172a]'}`
                }>
                                                {todo.text}
                                            </span>
                }
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3">
                                        {!todo.completed &&
                <button
                  onClick={() => startEditing(todo)}
                  className="p-2 text-slate-300 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                  
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </button>
                }
                                        {/* Red Dot Delete Style */}
                                        <button
                  onClick={() => deleteTodo(todo.id)}
                  className="w-4 h-4 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all active:scale-75 group-hover:shadow-sm"
                  title="Delete Task">
                  
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:bg-white transition-colors" />
                                        </button>
                                    </div>
                                </motion.div>
            )
            }
                    </AnimatePresence>
                </div>

                {/* Footer Metrics */}
                <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                            {todos.filter((t) => !t.completed).length} Pending
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {todos.filter((t) => t.completed).length} Success
                        </span>
                    </div>
                    {todos.some((t) => t.completed) &&
          <button
            onClick={clearCompleted}
            className="text-rose-400 hover:text-rose-600 transition-colors">
            
                            Sweep
                        </button>
          }
                </div>
            </div>
        </ProjectPageLayout>);

}