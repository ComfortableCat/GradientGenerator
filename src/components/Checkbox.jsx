"use client";
export default function PositionCheckbox({ background, setBackground }) {
  return (
    <div>
      <div className="flex justify-between">
        <p>Position Manual:</p>
        <div className="flex justify-end">
          <input
            type="checkbox"
            onMouseDown={() => {
              const colours = background.colours.map((colour, i) => {
                return {
                  ...colour,
                  ...{ position: (i * 100) / (background.colours.length - 1) },
                };
              });
              console.log(colours);
              setBackground({ ...background, ...colours });
            }}
            onChange={() => {
              console.log("changeEvent");
              const auto = { auto: !background.auto };
              setBackground({ ...background, ...auto });
            }}
          />
        </div>
      </div>
    </div>
  );
}
