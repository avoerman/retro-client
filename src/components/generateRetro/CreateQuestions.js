import React, { Component } from "react";
import { Button, TextButton } from "../shared/Buttons";

import styled from "styled-components";
import { Input } from "../shared/Forms";

const Question = styled.div`
  margin-bottom: 1em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1em;
`;

const QuestionHeader = styled.h4``;

const QuestionInput = styled(Input)`
  width: 100%;
`;

const QuestionInputContainer = styled.div`
  display: flex;
`;

const NoQuestions = styled.div`
  color: #666;
  margin-bottom: 1em;
  padding: 2em 0 2em 0;
`;

class CreateQuestions extends Component {
  state = {
    questions: [
      { label: "What went well?" },
      { label: "What didn't go well?" },
      { label: "What should we do differently next time?" }
    ]
  };

  handleAddQuestion = e => {
    e.preventDefault();
    this.setState({
      questions: [...this.state.questions, { label: "" }]
    });
  };

  handleDeleteQuestion = (e, index) => {
    e.preventDefault();
    this.setState({
      questions: this.state.questions.filter((_, i) => i !== index)
    });
  };

  handleOnQuestionChange = (e, index) => {
    this.setState({
      questions: this.state.questions.map(
        (question, i) => (index === i ? { ...question, label: e.target.value } : question)
      )
    });
  };

  render() {
    return (
      <div>
        {this.state.questions.map((question, index) => (
          <Question key={index}>
            <QuestionHeader>Question {index + 1}</QuestionHeader>
            <QuestionInputContainer>
              <QuestionInput
                type="text"
                placeholder="Enter question here"
                value={question.label}
                onChange={e => this.handleOnQuestionChange(e, index)}
              />
            </QuestionInputContainer>
            <TextButton onClick={e => this.handleDeleteQuestion(e, index)}>Delete</TextButton>
          </Question>
        ))}
        {this.state.questions.length < 1 && <NoQuestions>No questions right now.</NoQuestions>}
        <Button onClick={this.handleAddQuestion}>Add a question</Button>
      </div>
    );
  }
}
export default CreateQuestions;
