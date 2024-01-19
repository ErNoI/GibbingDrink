import "./buttons.css";
import useScroll from "../hooks/useScroll";

const ScrollButton = ({ onClick }) => {
  const isVisible = useScroll();

  return (
    <div
      className={`scroll-button button ${isVisible ? "visible" : ""}`}
      onClick={onClick}
    >
      Rank Up
    </div>
  );
};

export default ScrollButton;
