import React from "react";

export default function ConceptCard({ title, onClick }) {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-between p-4 text-center">
      <h3 className="text-lg font-semibold mb-20">{title}</h3>
      <button onClick={onClick}
        className="w-full py-2 text-blue-500 font-medium rounded bg-gray-100 hover:bg-gray-200">
        View Notes
      </button>
    </div>
  );
}
