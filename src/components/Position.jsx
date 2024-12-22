"use client";

export default function Position({ background, setBackground, i }) {
  return (
    <>
      {!background.auto && (
        <div className="flex justify-between">
          <input
            type="range"
            name="position"
            value={background.colours[i].position}
            max={100}
            min={0}
            className="w-16"
            onChange={(event) => {
              const colours = background.colours;

              if (
                i !== 0 &&
                Number(event.target.value) < background.colours[i - 1].position
              ) {
                colours[i].position = background.colours[i - 1].position;
              } else if (
                i !== background.colours.length - 1 &&
                Number(event.target.value) > background.colours[i + 1].position
              ) {
                colours[i].position = background.colours[i + 1].position;
              } else {
                colours[i].position = Number(event.target.value);
              }

              setBackground((background) => {
                return { ...background, ...colours };
              });
            }}
          />
          <p className="w-[27px] text-right">
            {background.colours[i].position}
          </p>
        </div>
      )}
    </>
  );
}
