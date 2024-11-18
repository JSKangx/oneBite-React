import { useState } from "react";
import TodoList from "./TodoList";

const Main = ({ itemList, deleteItem, onUpdate }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <h4 className="mb-6 font-semibold">Todo List 🍃</h4>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="검색어를 입력하세요"
        className="placeholder:text-sm border-b-2 focus:outline-none focus:border-b-blue-300 py-2"
      />
      <TodoList
        itemList={itemList}
        deleteItem={deleteItem}
        searchInput={searchInput}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Main;
