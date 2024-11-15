import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, date, deleteItem }) => {
  const itemTime = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div>
      <input type="checkbox" />
      <span>{item.title}</span>
      <span>{itemTime}</span>
      <DeleteButton deleteItem={deleteItem} item={item} />
    </div>
  );
};

export default TodoItem;
