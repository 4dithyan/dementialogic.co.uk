import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-95 transition-opacity">
      <img src="/images/Dementia_logo.svg?v=2" alt="DementiaLogic Logo" className="h-12 lg:h-16 w-auto object-contain" />
      <div className="leading-tight">
        <div className="text-2xl font-bold text-blue-800">DementiaLogic</div>
        <div className="text-sm font-medium text-blue-600">Compassion. Clarity. Care.</div>
      </div>
    </Link>
  );
}
