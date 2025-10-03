import React from "react";

// Map JSON types to CSS list-style-type
const getListStyleType = (type) => {
  switch (type?.toLowerCase()) {
    case "numbers":
    case "decimal":
      return "decimal";        // Numbered list
    case "roman":
      return "upper-roman";    // Roman numerals
    case "alphabet":
      return "lower-alpha";    // a, b, c
    default:
      return "disc";           // Bullet points as default
  }
};

const Heading = ({ text, notes = [] }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{text}</h3>

      {notes.map((note, idx) => {
        // Dynamic list
        if (note.type && note.list) {
          const listStyle = getListStyleType(note.type);
          return (
            <ol key={idx} className="ml-5 mb-4" style={{ listStyleType: listStyle }}>
              {note.list.map((item, i) => (
                <li key={i} className="mb-1">
                  {item}
                </li>
              ))}
            </ol>
          );
        }

        // Paragraph
        if (note.type === "paragraph") {
          return (
            <p key={idx} className="mb-2">
              {note.content}
            </p>
          );
        }
        // Subsection with bold tagName (always bullet list)
        if (note.type === "subsection") {
          return (
            <div key={idx} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{note.subhead}</h3>
              <ul className="list-disc ml-5">
                {note.points.map((point, i) => (
                  <li key={i} className="mb-2">
                    <strong>{point.tagName}</strong>: {point.description}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Heading;
