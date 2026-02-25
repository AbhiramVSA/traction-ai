import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "generating"
  | "draft"
  | "finalized"
  | "shared"
  | "ready"
  | "error"
  | "pending"
  | "applied"
  | "dismissed";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.1em]",
        variant === "default" && "bg-black text-white",
        variant === "generating" && "bg-gray-100 text-gray-300",
        variant === "draft" && "bg-gray-400 text-white",
        variant === "finalized" && "bg-black text-white",
        variant === "shared" && "bg-black text-white",
        variant === "ready" && "bg-black text-white",
        variant === "error" && "bg-red-600 text-white",
        variant === "pending" && "bg-gray-200 text-white",
        variant === "applied" && "bg-black text-white",
        variant === "dismissed" && "bg-gray-100 text-gray-300",
        className
      )}
    >
      {children}
    </span>
  );
}
