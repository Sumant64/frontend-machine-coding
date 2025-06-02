import React, { useCallback, useState } from "react";
import List from "./List";

const Callback = () => {
  const [number, setNumber] = useState();
  const [dark, setDark] = useState(false);

//   const getItems = () => {
//     return [number, number + 1, number + 2];
//   };

//   const getItems = useCallback(() => {
//     return [number, number + 1, number + 2];
//   }, [number])

  const getItems = useCallback((incremental) => {
    return [number + incremental, number + incremental + 1, number + incremental + 2];
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value ? +e.target.value : "")}
        />

        <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>

        {number && <List getItems={getItems} />}
      </div>
    </>
  );
};

export default Callback;
