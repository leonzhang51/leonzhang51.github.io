import { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.646 6.854a.5.5 0 0 0 .708 0L6 4.207l2.646 2.647a.5.5 0 1 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"
        />
        <path
          fillRule="evenodd"
          d="M6 3.5a.5.5 0 0 0-.5.5v6.5A2.5 2.5 0 0 0 8 13h5.5a.5.5 0 0 0 0-1H8a1.5 1.5 0 0 1-1.5-1.5V4a.5.5 0 0 0-.5-.5z"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
