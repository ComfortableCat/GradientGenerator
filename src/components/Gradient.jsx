"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Gradient() {
  const [minimise, setMinimise] = useState(false);
  const [background, setBackground] = useState({
    type: "linear",
    direction: "45",
    shape: "ellipse",
    center: ["50", "50"],
    colours: ["#ff0000", "#861C87"],
  });

  function handleChange(event) {
    const newKey = { [event.target.name]: `${event.target.value}` };
    setBackground((background) => {
      return { ...background, ...newKey };
    });
  }
  function handleColourChange(newColour, index) {
    const colours = {
      colours: background.colours.map((colour, i) => {
        if (index === i) {
          return newColour;
        } else {
          return colour;
        }
      }),
    };
    setBackground((background) => {
      return { ...background, ...colours };
    });
  }
  let cssColoursList = "";
  background.colours.forEach((colour, i) => {
    if (i === background.colours.length - 1) {
      cssColoursList = cssColoursList + colour;
    } else {
      cssColoursList = cssColoursList + `${colour}, `;
    }
  });
  const style = `${background.type}-gradient(${
    background.type === "linear"
      ? `${background.direction}deg,`
      : background.type === "radial"
      ? `${background.shape} at ${background.center[0]}% ${background.center[1]}%,`
      : ""
  } ${cssColoursList})`;
  return (
    <div
      style={{
        background: style,
      }}
      className={`w-[100vw] h-[100vh] flex flex-col ${
        !minimise ? `justify-center` : `justify-end`
      }  content-center `}
    >
      <div className="flex flex-col mx-auto bg-white rounded-md w-[230px] px-3 py-2 border-2 border-black relative">
        <h1>Choose your Gradient</h1>
        <Image
          src={"/up-arrow.png"}
          alt="arrow"
          width={20}
          height={20}
          className={`absolute top-2 right-4 ${!minimise ? `rotate-180` : ``}`}
          onClick={() => setMinimise(!minimise)}
        />
        {!minimise && (
          <>
            <p
              onClick={() => {
                navigator.clipboard.writeText(style);
                alert("Copied to clipboard");
              }}
              className="hover:bg-slate-200"
            >
              Copy CSS to clipboard
            </p>
            <div className="flex justify-between">
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                name="type"
                onChange={handleChange}
                className="w-32"
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
                <option value="conic">Conic</option>
              </select>
            </div>
            {background.type === "linear" ? (
              <div>
                <label htmlFor="directionInput">Direction: </label>
                <input
                  name="direction"
                  id="directionInput"
                  type="range"
                  max={360}
                  min={0}
                  step={1}
                  defaultValue={background.direction}
                  onChange={handleChange}
                />
              </div>
            ) : background.type === "radial" ? (
              <>
                <select name="shape" onChange={handleChange}>
                  <option value={"ellipse"}>ellipse</option>
                  <option value={"circle"}>circle</option>
                </select>
                <p>X-Coordinate</p>
                <input
                  name="xCoordinate"
                  type="range"
                  value={background.center[0]}
                  onChange={(event) => {
                    const newCenter = {
                      center: [event.target.value, background.center[1]],
                    };
                    setBackground({ ...background, ...newCenter });
                  }}
                />
                <p>Y-Coordinate</p>
                <input
                  name="yCoordinate"
                  type="range"
                  value={background.center[1]}
                  onChange={(event) => {
                    const newCenter = {
                      center: [background.center[0], event.target.value],
                    };
                    setBackground({ ...background, ...newCenter });
                  }}
                />
              </>
            ) : (
              <></>
            )}

            {background.colours.map((colour, i) => {
              return (
                <div key={i} className="flex justify-between items-center">
                  <p>Colour {i + 1}:</p>
                  <input
                    type="color"
                    name={`col${i + 1}`}
                    defaultValue={background.colours[i]}
                    className="w-8 h-8 m-0 p-0"
                    onChange={(event) =>
                      handleColourChange(event.target.value, i)
                    }
                  />
                </div>
              );
            })}
            <button
              onClick={() => {
                const newColourInput = {
                  colours: [...background.colours, "#000000"],
                };
                setBackground({ ...background, ...newColourInput });
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
        )}
      </div>
    </div>
  );
}
