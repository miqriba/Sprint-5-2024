import React from "react";
import { useState } from "react";

interface Props {
  items: {}[];
  pas: number;
  thisFunction;
}

function Indicator({ items, pas, thisFunction }: Props) {
  const handleClick = (step) => {
    thisFunction(step);
  };
  return (
    <>
      {/*⚠️ falta utilitzar styled components?*/}
      {items.map((item, index) => (
        <img
          onClick={() => handleClick(index)}
          id={index === pas ? "selected" : "unselected"}
          className="m-1"
          src={
            index === pas
              ? "src/assets/selected2.png"
              : "src/assets/unselected.png"
          }
          alt="not found"
          key={index}
        />
      ))}
    </>
  );
}

export default Indicator;
