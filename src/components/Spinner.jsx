import React from "react";

const Spinner = () => {
  return (
    <div
      className="flex justify-center items-center"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
