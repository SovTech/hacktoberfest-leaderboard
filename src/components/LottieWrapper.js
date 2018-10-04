import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";

export default class LottieControl extends React.Component {
  render() {
    const { loop, anim, width, height } = this.props;
    const options = {
      loop,
      autoplay: true,
      animationData: anim,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return <Lottie options={options} height={height} width={width} />;
  }
}

LottieControl.defaultProps = {
  loop: false,
  width: 180,
  height: 180
};

LottieControl.propTypes = {
  anim: PropTypes.object.isRequired,
  loop: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};
