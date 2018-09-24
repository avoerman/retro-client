import React, { Component } from "react";
import { ButtonSecondary } from "../shared/Buttons";
import { Input, InputGroup, Label } from "../shared/Forms";
import styled from "styled-components";
import CreateQuestions from "./CreateQuestions";
import { Link } from "react-router-dom";

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

const ReadyToStart = styled.div`
  flex: 1;
`;

const CreateHead = styled.h2`
  margin-top: 2em;
`;

class GenerateRetro extends Component {
  state = {
    retroName: ""
  };

  handleOnRetroNameChange = e => {
    this.setState({
      retroName: e.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        <CreateHead>Creating a Retro...</CreateHead>
        <BodyContainer>
          <CreateQuestionsContainer>
            <CreateQuestions />
          </CreateQuestionsContainer>
          <ReadyToStart>
            <h4>Ready to start?</h4>
            <InputGroup>
              <Label htmlFor="retroId">Retro Name</Label>
              <Input name="retroId" type="text" onChange={this.handleOnRetroNameChange} />
            </InputGroup>
            <Link to={/lounge-creator/ + this.state.retroName}>
              <ButtonSecondary disabled={!this.state.retroName}>Create retro!</ButtonSecondary>
            </Link>
          </ReadyToStart>
        </BodyContainer>
      </Wrapper>
    );
  }
}

export default GenerateRetro;
