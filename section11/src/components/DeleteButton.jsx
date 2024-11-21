import { useContext } from "react";
import { TodoDispatchContext } from "../App";

const DeleteButton = ({ item }) => {
  const { deleteItem } = useContext(TodoDispatchContext);
  const handleItemDelete = () => {
    deleteItem(item.id);
  };

  return (
    <button
      style={{ padding: "3px" }}
      onClick={handleItemDelete}
      className="bg-slate-200 rounded-md p-2 text-slate-600 text-xs shrink-0"
    >
      삭제
    </button>
  );
};

export default DeleteButton;
