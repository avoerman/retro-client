import React from "react";

import styled from "styled-components";
import { primaryBlue } from "../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  cursor: default;
`;

const Circle = styled.div`
  height: 1.5em;
  background: black;
  width: 1.5em;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.div`
  background: white;
  width: 1em;
  height: 1em;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectedCircle = styled.div`
  background: ${primaryBlue};
  width: 0.6em;
  height: 0.6em;
  border-radius: 30px;
`;

const Label = styled.span`
  margin-left: 0.5em;
`;

const RadioOption = props => {
  return (
    <Wrapper onClick={props.onClick}>
      <Circle>
        <InnerCircle>{props.selected && <SelectedCircle />}</InnerCircle>
      </Circle>{" "}
      <Label>{props.children}</Label>
    </Wrapper>
  );
};

export default RadioOption;
