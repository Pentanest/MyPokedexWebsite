import React from "react";
import "./documentationInputBox-styles.css";

export const DocumentationInputBox = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        placeholder="Encuentra tu pokémon..."
      />
    </div>
  );
};
