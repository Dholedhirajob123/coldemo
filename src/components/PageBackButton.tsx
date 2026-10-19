import { ChevronLeft } from "lucide-react";

export function PageBackButton({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate("/")}
      className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline"
      aria-label="Back to home"
    >
      <ChevronLeft className="h-4 w-4" /> Back to Home
    </button>
  );
}