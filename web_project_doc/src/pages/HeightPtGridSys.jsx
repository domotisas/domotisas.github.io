import React, { useState } from "react";

// même logique que public/assets/scripts/mult_n.js
const isMulti8 = (num) => {
  const smaller = num - (num % 8);
  const bigger = smaller + 8;
  return num % 8 === 0 ? num + " 👍 truthy" : "↓" + smaller + " or ↑" + bigger;
};

const HeightPtGridSys = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(value);
    setResult(isNaN(num) ? "⚠️ not a number" : isMulti8(num));
  };

  return (
    <div>
      <h1>Help 8pt Grid Sys</h1>

      <div className="flex items-end gap-2 leading-none">
        <form onSubmit={handleSubmit}>
          <label htmlFor="gridSys8Value">Grab your value:</label>
          <input
            id="gridSys8Value"
            type="text"
            placeholder="is a multiple of 8 ?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button id="grid8helper" type="submit">
            OK
          </button>
        </form>
        <span id="gridSys8Render" className="result">
          {" "}
          {result}
        </span>
      </div>

      <h2>UX rules</h2>
      <ul>
        <li>
          space between elements → <strong>never below 8px</strong> (16px is
          more realist){" "}
          <a href="https://material.io/design/layout/spacing-methods.html#touch-targets">
            👁 → material.io
          </a>
        </li>
        <li>8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96...</li>
        <li>
          button size → <strong>never below 48px</strong>
        </li>
      </ul>
    </div>
  );
};

export default HeightPtGridSys;
