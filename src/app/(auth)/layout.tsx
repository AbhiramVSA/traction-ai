import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav bar — matches main nav style */}
      <header className="flex items-center h-[72px] border-b hairline">
        <div className="flex items-center h-full px-8 md:px-10 border-r hairline">
          <Link href="/" className="text-[20px] font-black tracking-tight">
            TRACTION<span className="text-accent">.</span>
          </Link>
        </div>
        <div className="flex-1" />
        <Link
          href="/signup"
          className="hidden md:flex items-center h-full px-10 bg-black text-white swiss-label hover:bg-gray-400"
        >
          START PROJECT&nbsp;&nbsp;&rarr;
        </Link>
      </header>

      {/* Two-column layout */}
      <div className="flex-1 flex">
        {/* Left: form */}
        <div className="flex-1 flex items-center justify-center px-8 md:px-16 bg-[#fafafa]">
          <div className="w-full max-w-[460px] py-16 lg:py-20">
            {children}
          </div>
        </div>

        {/* Right: decorative panel (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-[40%] items-center justify-center bg-white border-l hairline">
          <div className="text-center">
            <div className="w-20 h-20 border border-gray-100 flex items-center justify-center mx-auto">
              <span className="text-[20px] text-gray-100 font-light">AI</span>
            </div>
            <p className="swiss-label text-gray-200 mt-6">
              Awaiting Input Data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
