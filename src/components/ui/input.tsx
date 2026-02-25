import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        <label
          htmlFor={inputId}
          className="swiss-label text-black block mb-3"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full border-b border-gray-100 bg-transparent py-3 text-[15px]",
            "placeholder:text-gray-200 focus:outline-none focus:border-black",
            error && "border-red-600",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-[11px] text-red-600 mt-2">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
