import TodoItem from "./TodoItem";

const TodoList = ({ itemList }) => {
  console.log(itemList);

  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
