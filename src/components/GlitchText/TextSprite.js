import { Container, Text, withFilters } from "@pixi/react";
import { TextStyle, BlurFilter, DisplacementFilter } from "pixi.js";
import colors from "../../helpers/colors";

const Filters = withFilters(Container, {
  displacement: DisplacementFilter,
});

const BlurFilters = withFilters(Container, {
  blur: BlurFilter,
});

function getTextStyle(width, fill, text) {
  return new TextStyle({
    fontFamily: "poppins, Helvetica, sans-serif",
    fontSize: (width / Math.max(text.length, 15)) * (width < 400 ? 1.4 : 1),
    fontWeight: "900",
    fill,
  });
}

const scaleX = {
  [colors.YELLOW.string]: 220,
  [colors.RED.string]: -180,
  [colors.LIGHT_BLUE.string]: 100,
};
const scaleY = {
  [colors.YELLOW.string]: 180 * 3,
  [colors.RED.string]: -80 * 3,
  [colors.LIGHT_BLUE.string]: 100 * 3,
};

export default function TextSprite({
  text,
  width,
  height,
  fill,
  x,
  y,
  cloudDisplacement,
  glitchDisplacement,
}) {
  const computedScaleX = scaleX[fill] ? x / scaleX[fill] : 0;
  const computedScaleY = scaleY[fill] ? y / scaleY[fill] : 0;

  return (
    <BlurFilters blur={{ blur: 0.5, padding: 100 }}>
      <Filters
        displacement={{
          construct: [cloudDisplacement],
          padding: 100,
        }}
      >
        <Filters
          displacement={{
            construct: [glitchDisplacement],
            padding: 100,
          }}
        >
          <Text
            text={text}
            anchor={{ x: 0.5, y: 0.5 }}
            x={width / 2 + computedScaleX}
            y={height / 2 + computedScaleY}
            style={getTextStyle(width, fill, text)}
          />
        </Filters>
      </Filters>
    </BlurFilters>
  );
}
