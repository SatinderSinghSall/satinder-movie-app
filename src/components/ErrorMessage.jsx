import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

const ErrorMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible || !message) return null;

  return (
    <div className="flex items-start gap-3 p-4 mt-4 bg-red-100 text-red-700 border border-red-300 rounded-xl shadow-md animate-fade-in transition-all duration-300 relative max-w-xl mx-auto">
      <AlertCircle className="w-5 h-5 mt-1 text-red-500" />
      <span className="text-sm">{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ErrorMessage;
