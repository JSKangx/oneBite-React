import { useState, useRef } from "react";
import AddButton from "./AddButton";

const TodoInput = ({ addItem }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getInput = () => {
    if (input.trim().length !== 0) {
      addItem(input); // App 컴포넌트의 아이템 추가 함수 입력 예정
      setInput("");
      inputRef.current.focus();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && input.trim().length !== 0) {
      e.preventDefault();
      getInput();
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
        onKeyUp={handleKeyUp}
      />
      <AddButton onClick={getInput} />
    </div>
  );
};

export default TodoInput;
