"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-heading-lg font-black uppercase">
          Something went wrong
        </h1>
        <p className="text-body text-gray-300 mt-4 max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center mt-10 px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-gray-400"
        >
          Try Again&nbsp;&nbsp;&rarr;
        </button>
      </div>
    </div>
  );
}
