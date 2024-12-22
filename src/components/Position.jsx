"use client";

export default function Position({ background, setBackground, i }) {
  return (
    <>
      {!background.auto && (
        <input
          type="range"
          name="position"
          value={background.colours[i].position}
          max={100}
          min={0}
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
            console.log(colours);
            setBackground((background) => {
              return { ...background, ...colours };
            });
          }}
        />
      )}
    </>
  );
}
