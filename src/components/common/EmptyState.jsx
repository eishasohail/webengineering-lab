/**
 * EmptyState — Reusable empty/no-results display.
 * Used in: CatalogProject, CartProject, TodoProject, MarksProject, UniversityPortal.
 * Shows a consistent "nothing here" UI with an icon, message, and optional action button.
 */
import React from "react";












export default function EmptyState({
  icon = <span className="text-6xl">🔍</span>,
  message = "Nothing found.",
  hint,
  action
}) {
  return (
    <div className="py-24 text-center">
            <div className="flex justify-center mb-5">{icon}</div>
            <p className="text-xl font-black text-gray-300">{message}</p>
            {hint && <p className="text-sm font-medium text-gray-300 mt-2">{hint}</p>}
            {action && <div className="mt-6">{action}</div>}
        </div>);

}