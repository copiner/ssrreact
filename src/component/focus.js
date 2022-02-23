/*
  useRef
  Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
*/
import React, { useRef } from "react";

function Focus() {
    
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
      inputEl.current.focus();
      console.log(inputEl.current.value)
  };
    
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
export default Focus
