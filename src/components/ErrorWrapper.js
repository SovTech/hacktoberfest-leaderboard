import React from "react";
import styled from "styled-components";

import LottieWrapper from "./LottieWrapper";

const errorAnim = require("../consts/lottie/empty_list.json");

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: ${props => (props.noMargin ? "0" : "20px")};
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 2px 2px 0px 0px #01ffff;
`;

export default ({ text, noMargin }) => {
  return (
    <Wrapper noMargin={noMargin}>
      <LottieWrapper anim={errorAnim} width={200} height={200} />
      <h3 color="#FFF" margin="20px 0">
        {text}
      </h3>
    </Wrapper>
  );
};
