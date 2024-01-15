import React from "react";
import { useState } from "react";
import Button from "./Button";

function Filter({ onChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleButtonClick = (text) => {
    setActiveFilter(text);
    onChange(text);
  };

  return (
    <div className="filter">
      <Button
        text={"All"}
        onClick={handleButtonClick}
        active={activeFilter === "All"}
      />
      <Button
        text={"Gibbing"}
        onClick={handleButtonClick}
        active={activeFilter === "Gibbing"}
      />
      <Button
        text={"Not Gibbing"}
        onClick={handleButtonClick}
        active={activeFilter === "Not Gibbing"}
      />
    </div>
  );
}

export default Filter;
