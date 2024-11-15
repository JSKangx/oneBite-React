import TodoItem from "./TodoItem";

const TodoList = ({ itemList, date, deleteItem }) => {
  console.log(itemList);

  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} date={date} deleteItem={deleteItem} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
