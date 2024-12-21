"use client";

import { useState } from "react";

export default function Checkbox({ children }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <p>Repeat:</p>
        <div className="flex justify-end">
          {show && children}
          <input type="checkbox" onChange={() => setShow(!show)} />
        </div>
      </div>
    </div>
  );
}
<div>
  <Checkbox>
    <input
      type="number"
      name="repeat"
      defaultValue={1}
      className="w-8"
      onChange={(event) => {
        const repeat = { repeat: `${event.target.value}` };
        setBackground((background) => {
          return { ...background, ...repeat };
        });
      }}
    />
  </Checkbox>
</div>;
