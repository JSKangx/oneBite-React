import TodoList from "./TodoList";

const Main = ({ itemList, date, deleteItem }) => {
  return (
    <div>
      <h4>Todo List</h4>
      <input type="text" />
      <TodoList itemList={itemList} date={date} deleteItem={deleteItem} />
    </div>
  );
};

export default Main;
