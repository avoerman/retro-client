import React from "react";
import styled from "styled-components";

const OuterCentered = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;

export const CenteredContent = props => {
  return (
    <OuterCentered>
      <div style={{ textAlign: props.centerAll ? "center" : "left" }}>{props.children}</div>
    </OuterCentered>
  );
};
