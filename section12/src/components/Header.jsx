import PropTypes from "prop-types";
import Button from "./Button";
import "./Header.css";

function Header({ title, leftChild, rightChild }) {
  return (
    <>
      <header className="Header">
        <div className="header_left">{leftChild}</div>
        <div className="header_center">{title}</div>
        <div className="header_right">{rightChild}</div>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  leftChild: PropTypes.node.isRequired,
};

export default Header;
