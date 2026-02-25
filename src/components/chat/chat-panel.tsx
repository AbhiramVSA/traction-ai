"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { ChatMessage as ChatMessageType } from "@/types";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";

const MOCK_RESPONSES = [
  "I've updated the slide to reflect your feedback. The changes should be visible now.",
  "Good suggestion. I've adjusted the content and formatting accordingly.",
  "I've made that change. Would you like me to modify anything else?",
  "Done. The document has been updated with the new information.",
  "I've refined the section based on your input. Let me know if it looks right.",
];

interface ChatPanelProps {
  initialMessages: ChatMessageType[];
  projectId: string;
}

export function ChatPanel({ initialMessages, projectId }: ChatPanelProps) {
  const [messages, setMessages] =
    useState<ChatMessageType[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSend = useCallback(
    (content: string) => {
      const userMessage: ChatMessageType = {
        id: `msg-${Date.now()}`,
        projectId,
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      timeoutRef.current = setTimeout(() => {
        const aiResponse: ChatMessageType = {
          id: `msg-${Date.now() + 1}`,
          projectId,
          role: "assistant",
          content:
            MOCK_RESPONSES[
              Math.floor(Math.random() * MOCK_RESPONSES.length)
            ],
          createdAt: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    },
    [projectId]
  );

  return (
    <div className="flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="px-5 py-4 bg-[#f7f7f7]">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-200 animate-pulse" />
                <span
                  className="w-1.5 h-1.5 bg-gray-200 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-gray-200 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <ChatInput onSubmit={handleSend} disabled={isTyping} />
    </div>
  );
}
