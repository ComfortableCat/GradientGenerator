"use client";
import React from "react";

export default function AddRemoveBtn({ background, setBackground }) {
  return (
    <>
      <button
        onClick={() => {
          const newColourInput = [...background.colours, { colour: "#000000" }];

          const colours = newColourInput.map((colour, i) => {
            let newPosition = 0;
            if (colour.position || colour.position === 0) {
              newPosition =
                colour.position /
                (background.colours.length / (background.colours.length - 1));
            } else {
              newPosition = 100;
            }
            return {
              ...colour,
              ...{ position: newPosition.toFixed(0) },
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
