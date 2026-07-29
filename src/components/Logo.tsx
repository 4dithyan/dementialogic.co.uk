import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-95 transition-opacity">
      <img src="/images/Dementia.png" alt="DementiaLogic Logo" className="h-12 lg:h-16 w-auto object-contain" />
      <div className="leading-tight">
        <div className="text-2xl font-bold text-[#6FA8E8]">DementiaLogic</div>
        <div className="text-sm font-medium text-[#6FA8E8]">Compassion. Clarity. Care.</div>
      </div>
    </Link>
  );
}
