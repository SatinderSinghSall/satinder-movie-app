import React from "react";
import { Sparkles } from "lucide-react";

const DeveloperCredit = () => {
  return (
    <div className="w-full bg-[#0f0c2f] py-10 px-4 border-t border-gray-700">
      <div className="flex flex-col items-center justify-center text-center">
        <Sparkles className="w-6 h-6 text-pink-500 animate-bounce mb-3" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
          Crafted with{" "}
          <span className="text-pink-500 font-medium">passion</span> and{" "}
          <span className="text-blue-400 font-medium">precision</span> by{" "}
          <a
            href="https://habit-club.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:text-blue-300 transition duration-200"
          >
            Satinder Singh Sall
          </a>
        </p>
      </div>
    </div>
  );
};

export default DeveloperCredit;
