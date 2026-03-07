/**
 * ProjectHeader — Reusable component used across all 12 projects.
 * Renders the "Back to Dashboard" link, project title, subtitle and badge.
 * This demonstrates React component reusability — one component, used in 12 places.
 */
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";




















export default function ProjectHeader({
  badge,
  title,
  subtitle,
  emoji,
  accentColor = "text-[#14B8A6]",
  backTo = "/",
  backLabel = "Back to Dashboard",
  actions
}) {
  return (
    <div className="mb-12">
            <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#14B8A6] mb-8 transition-colors group">
        
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {backLabel}
            </Link>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    {(emoji || badge) &&
          <div className="flex items-center gap-2 mb-3">
                            {emoji && <span className="text-2xl">{emoji}</span>}
                            {badge &&
            <span className={`text-xs font-black uppercase tracking-[0.25em] ${accentColor}`}>
                                    {badge}
                                </span>
            }
                        </div>
          }
                    <h1 className="text-4xl font-black text-[#0f172a] leading-tight">{title}</h1>
                    {subtitle &&
          <p className="text-gray-400 font-medium mt-2">{subtitle}</p>
          }
                </div>
                {actions && <div className="flex-shrink-0">{actions}</div>}
            </div>
        </div>);

}