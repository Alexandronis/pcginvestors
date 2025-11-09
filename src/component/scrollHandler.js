import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.replace("#", ""); // remove '#' for getElementById
    const element = document.getElementById(elementId);

    setTimeout(() => {
      window.scrollTo({
        behavior: "auto",
        top: element ? element.offsetTop - 100 : 0, // adjust offset if needed
      });
    }, 0); // 0ms timeout ensures DOM is ready
  }, [location]);

  return null;
};

export default ScrollHandler;
