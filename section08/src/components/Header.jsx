const Header = () => {
  return (
    <div>
      <h3>오늘은 🗓️</h3>
      <h2 className="text-blue-400 text-2xl font-semibold mb-6">
        {new Date().toDateString()}
      </h2>
    </div>
  );
};

export default Header;
