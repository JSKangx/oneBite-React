import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, deleteItem, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(item.id);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={onChangeCheckbox}
      />
      <span>{item.title}</span>
      <span className="ml-auto text-sm text-gray-400">
        {new Date(item.date).toLocaleDateString()}
      </span>
      <DeleteButton deleteItem={deleteItem} item={item} />
    </div>
  );
};

export default TodoItem;
