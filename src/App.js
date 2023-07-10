import { useEffect, useState } from "react";
import BottomText from "./components/BottomText/BottomText";
import GlitchText from "./components/GlitchText/GlitchText";

const TEXT = ["SOFTWARE ENGINEER", "FULLSTACK", "DESIGNER", "TECH LEAD"];

export default function App() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const callback = () => {
      setIndex((index) => (index + 1) % TEXT.length);
    };

    let interval;

    setTimeout(() => {
      setIndex(0);
      interval = setInterval(callback, 3000);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <GlitchText text={index === -1 ? "" : TEXT[index]} />
      <BottomText />
    </>
  );
}
