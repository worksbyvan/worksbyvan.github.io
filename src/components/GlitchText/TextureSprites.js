import colors from "../../helpers/colors";
import { Spring } from "react-spring";
import { Sprite } from "@pixi/react-animated";
import { Texture, WRAP_MODES } from "pixi.js";

const initialPosition = {
  [colors.WHITE.string]: { x: 0, y: 0 },
  [colors.YELLOW.string]: { x: Math.random() * 1500, y: Math.random() * 5000 },
  [colors.RED.string]: { x: Math.random() * 1500, y: Math.random() * 5000 },
  [colors.LIGHT_BLUE.string]: {
    x: Math.random() * 1500,
    y: Math.random() * 5000,
  },
};

export default function TextureSprites({
  setDisplacement,
  url,
  scale = { x: 1, y: 1 },
}) {
  return [
    colors.LIGHT_BLUE.string,
    colors.YELLOW.string,
    colors.RED.string,
    colors.WHITE.string,
  ].map((fill) => {
    const computedX = initialPosition[fill]?.x || 0;
    const computedY = initialPosition[fill]?.y || 0;

    return (
      <Spring
        key={fill}
        from={{ x: computedX, y: computedY }}
        to={{
          x: computedX + 5000 * (Math.random() > 0.5 ? -1 : 1),
          y: computedY,
        }}
        loop={true}
        config={{ duration: 50000 }}
      >
        {(props) => (
          <Sprite
            texture={Texture.from(url, {
              wrapMode: WRAP_MODES.REPEAT,
            })}
            ref={setDisplacement[fill]}
            scale={scale}
            {...props}
          />
        )}
      </Spring>
    );
  });
}
