import React from "react";

export default function Sidebar({ topics, onTopicSelect }) {
  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded"
            onClick={() => onTopicSelect(topic)}
          >
            {topic.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
