const Header = ({ formattedDate }) => {
  return (
    <div>
      <h3>오늘은</h3>
      <h2>{formattedDate}</h2>
    </div>
  );
};

export default Header;
