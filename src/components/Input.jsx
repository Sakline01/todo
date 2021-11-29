import React, { useState } from "react";

const Input = ({ onTaskCreate }) => {
  const [text, setText] = useState("");
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    onTaskCreate(text);
    // console.log(item);
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleOnchange}
        placeholder="input here"
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Input;