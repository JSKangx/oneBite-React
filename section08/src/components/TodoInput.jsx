import { useState, useRef } from "react";
import AddButton from "./AddButton";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (input.trim().length !== 0) {
      console.log(input);
      setInput("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="새로운 Todo..."
      />
      <AddButton onClick={addItem} />
    </div>
  );
};

export default TodoInput;
