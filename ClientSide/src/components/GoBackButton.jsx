import React from "react";

export default function GoBackButton({ onClick }) {
  return (
    <button onClick={onClick}
      className="mb-6 flex items-center text-blue-600 hover:text-blue-800">
      ← Back
    </button>
  );
}
