import { useEffect, useState } from "react";

export default function useCenterMousePosition() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const listener = (e) => {
      setPosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", listener);

    return () => window.removeEventListener("mousemove", listener);
  }, []);

  return [x, y];
}
