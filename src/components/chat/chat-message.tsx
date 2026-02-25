import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/types";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] px-5 py-4",
          isUser
            ? "bg-black text-white"
            : "bg-[#f7f7f7] text-black"
        )}
      >
        <p className="text-[13px] whitespace-pre-wrap leading-relaxed">
          {message.content}
        </p>
        <time
          className={cn(
            "block text-[10px] mt-2",
            isUser ? "text-white/50" : "text-gray-200"
          )}
        >
          {new Date(message.createdAt).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </time>
      </div>
    </div>
  );
}
