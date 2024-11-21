import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const TodoList = ({ searchInput }) => {
  const itemList = useContext(TodoStateContext);
  return (
    <ul>
      {itemList
        .filter((item) =>
          item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        )
        .map((item) => (
          <li key={item.id} className="py-4 border-b-[1px]">
            <TodoItem item={item} />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
