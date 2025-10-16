import React, { useState } from "react";
import Heading from "../components/Heading";
import ExampleBox from "../components/ExampleBox";
import ConceptCard from "../components/ConceptCard";
import GoBackButton from "../components/GoBackButton";
import ReatJsData from "../data/React.json";
import MongoData from "../data/MongoDB.json";
import NodeData from "../data/Nodejs.json";

const technologies = { React: ReatJsData, MongoDB: MongoData, Nodejs: NodeData };

export default function CoursePage() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  // Format notes for Heading component
  const formatNotes = (notes) =>
    notes.map((note) => {
      if (note.type && note.list) {
        // numbers, decimal, roman, alphabet, bullets are passed as-is
        return { type: note.type, list: note.list };
      }
      if (note.type === "paragraph") {
        return { type: "paragraph", content: note.content };
      }
      if (note.type === "subsection") {
        return { type: "subsection", subhead: note.subhead, points: note.points };
      }
      return null;
    });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Full Stack Technologies</h2>
        {Object.keys(technologies).map((tech, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedTech(tech);
              setSelectedConcept(null);
            }}
            className={`block w-full text-left p-2 mb-2 rounded transition-colors ${
              selectedTech === tech
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {!selectedTech && <p>Select a technology from the sidebar.</p>}

        {/* Concept Cards */}
        {selectedTech && !selectedConcept && (
          <div>
            <h2 className="text-2xl font-bold mb-6">{selectedTech} Concepts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies[selectedTech].concepts.map((concept, i) => (
                <ConceptCard
                  key={i}
                  title={concept.head}
                  onClick={() => setSelectedConcept(concept)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Concept Details */}
        {selectedTech && selectedConcept && (
          <div>
            <GoBackButton onClick={() => setSelectedConcept(null)} />
            <h2 className="text-2xl font-bold mb-4">{selectedConcept.head}</h2>

            {/* Render notes using Heading */}
            <Heading
              text={selectedConcept.title}
              notes={formatNotes(selectedConcept.notes)}
            />

            {/* Render example code */}
            {selectedConcept.examples && (
              <ExampleBox
                title={selectedConcept.examples.title}
                code={selectedConcept.examples.code}
                language={selectedConcept.examples.Language || "text"}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
