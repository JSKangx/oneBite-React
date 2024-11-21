import { memo, useContext } from "react";
import DeleteButton from "./DeleteButton";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ item }) => {
  const { onUpdate } = useContext(TodoDispatchContext);

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
      <DeleteButton item={item} />
    </div>
  );
};

export default memo(TodoItem);
