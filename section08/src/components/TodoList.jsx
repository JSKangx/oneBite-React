import TodoItem from "./TodoItem";

const TodoList = ({ itemList, deleteItem, searchInput, onUpdate }) => {
  return (
    <ul>
      {itemList
        .filter((item) =>
          item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        )
        .map((item) => (
          <li key={item.id} className="py-4 border-b-[1px]">
            <TodoItem item={item} deleteItem={deleteItem} onUpdate={onUpdate} />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
