const AddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "#2493FF", color: "white" }}
    >
      추가
    </button>
  );
};

export default AddButton;
