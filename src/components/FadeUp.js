import React from "react";
import styled from "styled-components";
import { Spring, config, animated } from "react-spring";

const getConfig = customConfig => {
  switch (customConfig) {
    case "slow":
      return config.slow;
    case "gentle":
      return config.gentle;
    case "stiff":
      return config.stiff;
    case "wobbly":
      return config.wobbly;
    default:
      return config.default;
  }
};

const AnimatedDiv = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ({ children, style, delay, customConfig }) => {
  return (
    <Spring
      native
      delay={delay}
      config={getConfig(customConfig)}
      from={{ opacity: 0, translateY: "40px" }}
      to={{ opacity: 1, translateY: "0" }}
    >
      {({ opacity, translateY }) => (
        <AnimatedDiv
          style={{
            opacity,
            transform: translateY.interpolate(x => `translate3d(0,${x},0)`),
            ...style
          }}
        >
          {children}
        </AnimatedDiv>
      )}
    </Spring>
  );
};
