import React, { useState, useEffect } from "react";
import "./buttons.css";

const ScrollButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 500;

      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-button button ${isVisible ? "visible" : ""}`}
      onClick={onClick}
    >
      Start quiz
    </div>
  );
};

export default ScrollButton;
