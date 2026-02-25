"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function PromptInput() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!value.trim()) return;
      router.push("/projects/proj-1");
    },
    [value, router]
  );

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. A fintech app for cross-border payments..."
        className="w-full h-[60px] pl-0 pr-16 text-[17px] bg-transparent border-b border-black placeholder:text-gray-200 focus:outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="absolute right-0 bottom-0 h-[44px] px-6 flex items-center justify-center bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] disabled:opacity-15 hover:bg-gray-400 mb-[1px]"
        aria-label="Generate pitch deck"
      >
        Initialize&nbsp;&nbsp;&rarr;
      </button>
    </form>
  );
}
