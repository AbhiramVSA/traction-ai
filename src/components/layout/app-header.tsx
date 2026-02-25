"use client";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-[72px] px-8 bg-white border-b hairline">
      {/* Mobile menu */}
      <button
        className="lg:hidden flex flex-col gap-[5px]"
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-[1.5px] bg-black" />
        <span className="block w-5 h-[1.5px] bg-black" />
      </button>

      {/* Desktop spacer */}
      <div className="hidden lg:block" />

      {/* User avatar */}
      <div className="flex items-center justify-center w-9 h-9 bg-black text-white text-[11px] font-bold tracking-wide">
        AC
      </div>
    </header>
  );
}
