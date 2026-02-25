import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-display-xl font-black uppercase tracking-tight">
          404
        </h1>
        <p className="text-heading-sm font-bold uppercase mt-4">
          Page not found
        </p>
        <p className="text-body text-gray-300 mt-3">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center mt-10 px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-gray-400"
        >
          Go to Dashboard&nbsp;&nbsp;&rarr;
        </Link>
      </div>
    </div>
  );
}
