const Button = ({ num, changeCount }) => {
  function handleCount() {
    changeCount(num);
  }

  return <button onClick={handleCount}>{num < 0 ? num : `+${num}`}</button>;
};

export default Button;
