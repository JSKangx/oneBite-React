const Button = ({ num, changeCount }) => {
  function handleCount() {
    changeCount(num);
  }

  return <button onClick={handleCount}>{num}</button>;
};

export default Button;
