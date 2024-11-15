import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, date }) => {
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
      <DeleteButton />
    </div>
  );
};

export default TodoItem;
