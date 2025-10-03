import React, { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

const ExampleBox = ({ title = "Example", code }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      try {
        const highlighted = hljs.highlightAuto(code);
        codeRef.current.innerHTML = highlighted.value;
        codeRef.current.classList.add("hljs");
      } catch (err) {
        codeRef.current.textContent = code;
        console.log(err)
      }
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 mb-6 relative">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 flex items-center gap-1 text-gray-600 hover:text-black text-sm"
      >
        <Copy size={16} />
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="bg-white border-l-4 border-green-500 text-sm rounded mb-4 overflow-x-auto p-3">
        <pre className="m-0">
          <code ref={codeRef}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ExampleBox;
