import { useEffect, useState } from "react";

export default function useMousePosition() {
  // {x:val, y:val}
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    // cleanup function
    return () => {
      addEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
}
