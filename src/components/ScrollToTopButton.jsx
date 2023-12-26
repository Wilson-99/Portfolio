import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.documentElement.scrollHeight - windowHeight;

      const percentage = (scrollTop / bodyHeight) * 100;
      setScrollPercentage(percentage);

      setShowIcon(percentage > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${showIcon ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div className="circle-wrapper">
        <div
          className="circle"
          style={{
            background: `conic-gradient(#0F5253 ${scrollPercentage}%, transparent ${scrollPercentage}%)`,
          }}
        >
          {" "}
          <div className="arrow-icon">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ScrollToTopButton;
