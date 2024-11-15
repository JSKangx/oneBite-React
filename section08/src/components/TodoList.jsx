import TodoItem from "./TodoItem";

const TodoList = ({ itemList, date }) => {
  console.log(itemList);

  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} date={date} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
