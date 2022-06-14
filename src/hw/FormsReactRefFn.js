import { React, useRef } from "react";

function SumbitRef() {
  const inputField = useRef(null);

  const SumbitButton = () => {
    const inputEl = inputField.current.value;
    console.log("Отправлено с ref", inputEl);
  };

  return (
    <div>
      <input type="text" ref={inputField}></input>
      <button type="button" onClick={SumbitButton}>
        Send
      </button>
    </div>
  );
}

export default SumbitRef;
