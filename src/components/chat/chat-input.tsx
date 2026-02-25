"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  onSubmit,
  placeholder = "Type a message...",
  disabled = false,
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, [value]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = value.trim();
      if (!trimmed || disabled) return;
      onSubmit(trimmed);
      setValue("");
    },
    [value, disabled, onSubmit]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-t hairline-dark bg-white"
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none border-b border-gray-100 px-0 py-2.5 text-[13px] placeholder:text-gray-200 focus:outline-none focus:border-black bg-transparent"
      />
      <button
        type="submit"
        disabled={!value.trim() || disabled}
        className="flex-shrink-0 px-5 py-2.5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.08em] disabled:opacity-15 hover:bg-gray-400"
        aria-label="Send message"
      >
        Send
      </button>
    </form>
  );
}
