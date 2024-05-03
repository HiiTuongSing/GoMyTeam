import React, { useEffect, useRef } from "react";

export default function BackToTopButton() {
  const mybuttonRef = useRef(null);

  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = mybuttonRef.current;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    const handleScroll = () => {
      scrollFunction();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <button
      onClick={topFunction}
      ref={mybuttonRef}
      id="backToTopBtn"
      title="Go to top"
      className="p-3 rounded fs-4"
    >
      <i class="fa-solid fa-angles-up"></i>
    </button>
  );
}
