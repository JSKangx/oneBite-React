import TodoItem from "./TodoItem";

const TodoList = ({ itemList, date, deleteItem, searchInput }) => {
  return (
    <ul>
      {itemList
        .filter((item) =>
          item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        )
        .map((item) => (
          <li key={item.id}>
            <TodoItem item={item} date={date} deleteItem={deleteItem} />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
