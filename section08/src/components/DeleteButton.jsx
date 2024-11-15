const DeleteButton = ({ deleteItem, item }) => {
  const handleItemDelete = () => {
    deleteItem(item.id);
  };

  return (
    <button style={{ padding: "3px" }} onClick={handleItemDelete}>
      삭제
    </button>
  );
};

export default DeleteButton;
