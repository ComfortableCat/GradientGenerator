"use client";
import React from "react";

export default function AddRemoveBtn({ background, setBackground }) {
  return (
    <>
      <button
        onClick={() => {
          const newColourInput = [...background.colours, { colour: "#000000" }];

          const colours = newColourInput.map((colour, i) => {
            return {
              ...colour,
              ...{ position: (i * 100) / background.colours.length },
            };
          });

          setBackground({ ...background, ...{ colours: colours } });
        }}
      >
        Add colour
      </button>
      {background.colours.length > 2 && (
        <button
          onClick={() => {
            const updatedColours = { colours: [...background.colours] };
            updatedColours.colours.pop();
            setBackground({ ...background, ...updatedColours });
          }}
        >
          Remove Colour
        </button>
      )}
    </>
  );
}
