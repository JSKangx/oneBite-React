import { memo } from "react";
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

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 props가 바뀌었는지를 판단
//   // true : props 바뀌지 않음 -> 리렌더링 X
//   // false : props 바뀜 -> 리렌더링 O
//   if (prevProps.item.id !== nextProps.item.id) return false;
//   if (prevProps.item.completed !== nextProps.item.completed) return false;
//   if (prevProps.item.title !== nextProps.item.title) return false;
//   if (prevProps.item.date !== nextProps.item.date) return false;

//   return true;
// });

export default memo(TodoItem);
