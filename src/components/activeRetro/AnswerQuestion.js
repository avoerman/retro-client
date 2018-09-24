import React, { Component } from "react";
import { Input } from "../shared/Forms";
import { Button } from "../shared/Buttons";
import styled from "styled-components";
import { CenteredContent } from "../shared/LayoutContainers";

const QuestionAnswer = styled.div`
  margin-bottom: 2em;
`;

class AnswerQuestion extends Component {
  handleRespondClick = e => {
    e.preventDefault();
    this.props.questionAnswered();
  };

  render() {
    return (
      <CenteredContent centerAll={true}>
        <QuestionAnswer>
          <h2>What went well?</h2>
          <Input type="text" placeholder="Enter response here" />
        </QuestionAnswer>
        <Button onClick={this.handleRespondClick}>Respond</Button>
      </CenteredContent>
    );
  }
}

export default AnswerQuestion;
