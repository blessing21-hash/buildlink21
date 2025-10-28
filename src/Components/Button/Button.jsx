import React from "react";
import "./Button.css";

// ButtonGrid.jsx
// A simple React component that renders 4 buttons on the top row and 3 on the bottom row.
// - The first button is a filled blue button.
// - The other buttons have a white background and a blue border.

export default function ButtonGrid({
  topLabels = ["All", "Builers", "Plumber", "Plumber"],
  bottomLabels = [ "Company", "Party tome"],
  onClick = (label) => console.log(label),
}) {
  return (
    <div className="button-grid">
      {/* Top row: 4 buttons */}
      <div className="row row-top">
        {topLabels.slice(0, 4).map((label, idx) => (
          <button
            key={label}
            onClick={() => onClick(label)}
            className={idx === 0 ? "btn btn-primary" : "btn btn-outline"}
            aria-pressed={idx === 0}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Bottom row: 3 buttons */}
      <div className="row row-bottom">
        {bottomLabels.slice(0, 3).map((label) => (
          <button
            key={label}
            onClick={() => onClick(label)}
            className="btn btn-outline"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}