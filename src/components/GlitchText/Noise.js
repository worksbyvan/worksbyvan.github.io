import { useWindowSize } from "@uidotdev/usehooks";
import { BLEND_MODES } from "pixi.js";
import { useEffect, useState } from "react";
import { TilingSprite } from "@pixi/react-animated";

export default function Noise() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const { width, height } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <TilingSprite
      image="images/noise.jpeg"
      width={width}
      height={height}
      blendMode={BLEND_MODES.MULTIPLY}
      alpha={0.3}
      tilePosition={{ x, y }}
    />
  );
}
