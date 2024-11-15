const TodoItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <input type="checkbox" />
      <p>{item.title}</p>
      <p>{item.time}</p>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
