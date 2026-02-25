"use client";

import { useState } from "react";
import type { AiSuggestion } from "@/types";
import { Badge } from "@/components/ui/badge";

interface SuggestionsPanelProps {
  suggestions: AiSuggestion[];
}

export function SuggestionsPanel({ suggestions }: SuggestionsPanelProps) {
  const [items, setItems] = useState<AiSuggestion[]>(suggestions);

  function updateStatus(id: string, status: "applied" | "dismissed") {
    setItems((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  }

  if (items.length === 0) {
    return (
      <p className="text-[13px] text-gray-200">No suggestions available.</p>
    );
  }

  return (
    <ul>
      {items.map((suggestion) => (
        <li
          key={suggestion.id}
          className="border-b hairline pb-5 pt-5 first:pt-0 last:border-b-0"
        >
          <p className="text-[13px] mb-3 leading-relaxed">
            {suggestion.description}
          </p>

          {suggestion.status === "pending" ? (
            <div className="flex gap-4">
              <button
                type="button"
                className="text-[11px] font-bold uppercase tracking-[0.08em] text-black hover:underline underline-offset-2"
                onClick={() => updateStatus(suggestion.id, "applied")}
              >
                Apply
              </button>
              <button
                type="button"
                className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-200 hover:underline underline-offset-2"
                onClick={() => updateStatus(suggestion.id, "dismissed")}
              >
                Dismiss
              </button>
            </div>
          ) : (
            <Badge variant={suggestion.status}>{suggestion.status}</Badge>
          )}
        </li>
      ))}
    </ul>
  );
}
