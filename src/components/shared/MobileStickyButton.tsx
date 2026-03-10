"use client";

import { useTranslations } from "next-intl";

export default function MobileStickyButton() {
  const at = useTranslations("AnalysisModal");

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-analysis-modal"));
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-5 pt-3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
      <button
        onClick={handleClick}
        className="pointer-events-auto w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#ec2027] text-white font-bold text-base tracking-wide shadow-[0_0_40px_rgba(236,32,39,0.55)] active:scale-95 transition-transform"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        {at("button")}
      </button>
    </div>
  );
}
