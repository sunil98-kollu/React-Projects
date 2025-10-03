import React from "react";

const BulletPoints = ({ points = [], listType = "bullets" }) => {
  const getListStyle = () => {
    switch (listType) {
      case "numbers":
        return "list-decimal"; // 1,2,3
      case "roman":
        return "list-[upper-roman]"; // I, II, III
      case "roman-lower":
        return "list-[lower-roman]"; // i, ii, iii
      case "alpha":
        return "list-[lower-alpha]"; // a, b, c
      case "alpha-upper":
        return "list-[upper-alpha]"; // A, B, C
      case "bullets":
      default:
        return "list-disc"; // • bullets
    }
  };

  return (
    <ul className={`${getListStyle()} list-inside space-y-1`}>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
};

export default BulletPoints;
