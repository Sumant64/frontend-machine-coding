import React, { useRef, useState } from "react";

const FocusWithRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />

      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default FocusWithRef;
