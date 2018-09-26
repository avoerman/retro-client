import React, { Component } from "react";
import styled from "styled-components";
import CreateQuestions from "./CreateQuestions";
import ReadyToStart from "./ReadyToStart";

const Wrapper = styled.div`
  width: 70vw;
  max-width: 80em;
  min-width: 20em;
  margin-left: auto;
  margin-right: auto;
`;

const BodyContainer = styled.div`
  display: flex;
`;

const CreateQuestionsContainer = styled.div`
  flex: 3;
  border-right: 1px solid #ccc;
  margin-right: 1em;
  padding-right: 1em;
`;

const ReadyToStartContainer = styled.div`
  flex: 1;
`;

const CreateHead = styled.h2`
  margin-top: 2em;
`;

class GenerateRetro extends Component {
  render() {
    return (
      <Wrapper>
        <CreateHead>Creating a Retro...</CreateHead>
        <BodyContainer>
          <CreateQuestionsContainer>
            <CreateQuestions />
          </CreateQuestionsContainer>
          <ReadyToStartContainer>
            <ReadyToStart />
          </ReadyToStartContainer>
        </BodyContainer>
      </Wrapper>
    );
  }
}

export default GenerateRetro;
