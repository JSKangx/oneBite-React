import { useState } from "react";
import TodoList from "./TodoList";

const Main = ({ itemList, date, deleteItem }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <h4>Todo List</h4>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="검색어를 입력하세요"
      />
      <TodoList
        itemList={itemList}
        date={date}
        deleteItem={deleteItem}
        searchInput={searchInput}
      />
    </div>
  );
};

export default Main;
