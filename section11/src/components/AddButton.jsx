const AddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "#2493FF", color: "white" }}
      className="text-xs px-4 rounded-md"
    >
      추가
    </button>
  );
};

export default AddButton;
