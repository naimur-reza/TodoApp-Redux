import React from "react";

export const PriorityText = ({ priority, title }) => {
  return (
    <>
      <h1
        className={`${
          priority === "low"
            ? "text-green-500"
            : priority === "medium"
            ? "text-violet-500"
            : "text-red-500"
        }`}>
        {title}
      </h1>
    </>
  );
};
