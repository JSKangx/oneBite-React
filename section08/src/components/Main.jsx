import TodoList from "./TodoList";

const Main = ({ itemList, date }) => {
  return (
    <div>
      <h4>Todo List</h4>
      <input type="text" />
      <TodoList itemList={itemList} date={date} />
    </div>
  );
};

export default Main;
