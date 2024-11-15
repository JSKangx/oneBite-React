import TodoList from "./TodoList";

const Main = ({ itemList }) => {
  return (
    <div>
      <h4>Todo List</h4>
      <input type="text" />
      <TodoList itemList={itemList} />
    </div>
  );
};

export default Main;
