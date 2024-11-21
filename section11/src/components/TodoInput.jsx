import { useState, useRef, useContext } from "react";
import AddButton from "./AddButton";
import { TodoDispatchContext } from "../App";

const TodoInput = () => {
  const { addItem } = useContext(TodoDispatchContext);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getInput = () => {
    if (input.trim() === "") {
      inputRef.current.focus();
      return;
    }
    addItem(input); // App 컴포넌트의 아이템 추가 함수 입력 예정
    setInput("");
    inputRef.current.focus();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && input.trim().length !== 0) {
      e.preventDefault();
      getInput();
    }
  };

  return (
    <div className="flex mb-4">
      <input
        ref={inputRef}
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="새로운 Todo..."
        onKeyUp={handleKeyUp}
        className="ring-1 ring-gray-200 px-3 py-2 mr-2 flex-grow rounded-md placeholder:text-sm"
      />
      <AddButton onClick={getInput} />
    </div>
  );
};

export default TodoInput;
