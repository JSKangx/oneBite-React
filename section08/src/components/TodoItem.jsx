import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, date, deleteItem }) => {
  const itemTime = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className="flex items-center gap-4">
      <input type="checkbox" />
      <span>{item.title}</span>
      <span className="ml-auto text-sm text-gray-400">{itemTime}</span>
      <DeleteButton deleteItem={deleteItem} item={item} />
    </div>
  );
};

export default TodoItem;
