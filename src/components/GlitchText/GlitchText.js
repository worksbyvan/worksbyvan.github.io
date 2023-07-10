import { Stage } from "@pixi/react";
import { useMemo, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import styles from "./GlitchText.module.scss";
import colors from "../../helpers/colors";
import useCenterMousePosition from "../../hooks/useCenterMousePosition";
import TextureSprites from "./TextureSprites";
import TextSprite from "./TextSprite";
import Noise from "./Noise";

export default function GlitchText({ text }) {
  const { height, width } = useWindowSize();
  const [cloudDisplacement, setCloudDisplacement] = useState({});
  const [glitchDisplacement, setGlitchDisplacement] = useState({});
  const [x, y] = useCenterMousePosition();

  const setDisplacementByColor = useMemo(() => {
    const setCloud = (fill) => (node) => {
      setCloudDisplacement((prev) => {
        return {
          ...prev,
          [fill]: node,
        };
      });
    };

    const setGlitch = (fill) => (node) => {
      setGlitchDisplacement((prev) => {
        return {
          ...prev,
          [fill]: node,
        };
      });
    };

    return {
      cloud: {
        [colors.LIGHT_BLUE.string]: setCloud(colors.LIGHT_BLUE.string),
        [colors.YELLOW.string]: setCloud(colors.YELLOW.string),
        [colors.RED.string]: setCloud(colors.RED.string),
        [colors.WHITE.string]: setCloud(colors.WHITE.string),
      },
      glitch: {
        [colors.LIGHT_BLUE.string]: setGlitch(colors.LIGHT_BLUE.string),
        [colors.YELLOW.string]: setGlitch(colors.YELLOW.string),
        [colors.RED.string]: setGlitch(colors.RED.string),
        [colors.WHITE.string]: setGlitch(colors.WHITE.string),
      },
    };
  }, []);

  return (
    <Stage
      width={width}
      height={height}
      className={styles.stage}
      options={{ backgroundColor: colors.BLUE.hex }}
    >
      <TextureSprites
        setDisplacement={setDisplacementByColor.cloud}
        url={"/images/cloud.jpeg"}
        scale={{ x: 0.75, y: 0.75 }}
      />
      <TextureSprites
        setDisplacement={setDisplacementByColor.glitch}
        url={"/images/glitch.jpeg"}
        scale={{ x: 2, y: 2 }}
      />
      {Object.keys(cloudDisplacement).length > 0 &&
        [
          colors.LIGHT_BLUE.string,
          colors.YELLOW.string,
          colors.RED.string,
          colors.WHITE.string,
        ].map((fill) => (
          <TextSprite
            key={fill}
            text={text}
            width={width}
            height={height}
            x={x}
            y={y}
            fill={fill}
            cloudDisplacement={cloudDisplacement[fill]}
            glitchDisplacement={glitchDisplacement[fill]}
          />
        ))}
      <Noise />
    </Stage>
  );
}
