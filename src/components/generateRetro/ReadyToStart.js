import { Input, InputGroup, Label } from "../shared/Forms";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import generate from "project-name-generator";
import styled from "styled-components";
import { Button, ButtonSecondary } from "../shared/Buttons";

const GenerateRandomButton = styled(Button)`
  display: block;
  margin-bottom: 1em;
  width: 100%;
`;

const CreateRetroButton = styled(ButtonSecondary)`
  display: block;
  width: 100%;
`;

const RetroNameInputGroup = styled(InputGroup)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class ReadyToStart extends Component {
  state = {
    retroName: ""
  };

  handleOnRetroNameChange = e => {
    this.setState({
      retroName: e.target.value
    });
  };

  handleRandomNameClick = e => {
    const randName = generate().dashed;
    this.setState({
      retroName: randName
    });
  };

  render() {
    return (
      <div>
        <h4>Ready to start?</h4>
        <RetroNameInputGroup>
          <Label htmlFor="retroId">Retro Name</Label>
          <Input
            name="retroId"
            type="text"
            value={this.state.retroName}
            onChange={this.handleOnRetroNameChange}
          />
        </RetroNameInputGroup>
        <GenerateRandomButton onClick={this.handleRandomNameClick}>
          Generate Random Name
        </GenerateRandomButton>
        <Link to={/lounge-creator/ + this.state.retroName}>
          <CreateRetroButton disabled={!this.state.retroName}>Create retro!</CreateRetroButton>
        </Link>
      </div>
    );
  }
}

export default ReadyToStart;
