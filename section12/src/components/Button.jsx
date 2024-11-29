import "./Button.css";
import PropTypes from "prop-types";

function Button({ text, type, onClick }) {
  return (
    <>
      <button onClick={onClick} className={`Button Button_${type}`}>
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
