import Button from "./button";

const Controller = ({ changeCount }) => {
  const numbers = [-100, -10, -1, 1, 10, 100];

  return (
    <div>
      {numbers.map((num) => (
        <Button num={num} key={Math.random()} changeCount={changeCount} />
      ))}
    </div>
  );
};

export default Controller;
