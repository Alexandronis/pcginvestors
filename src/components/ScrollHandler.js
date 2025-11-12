import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHashElement = () => {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);

      window.scrollTo({
        behavior: "auto",
        top: element ? element.offsetTop - 100 : 0, // adjust offset if needed
      });
    };

    // Use small timeout to ensure DOM is ready
    const timer = setTimeout(scrollToHashElement, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default ScrollHandler;
