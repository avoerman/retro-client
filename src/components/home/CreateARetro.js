import React, { Component } from "react";
import { Link } from "react-router-dom";
import RadioOption from "../shared/RadioOption";
import { ButtonSecondary } from "../shared/Buttons";
import styled from "styled-components";
import { primaryBlue } from "../../constants/colors";

const ContinueButton = styled(ButtonSecondary)`
  padding: 0.75em;
  width: 100%;
`;

const CreateLabel = styled.div`
  color: #666;
  font-weight: bold;
  margin-bottom: 1em;
  border-bottom: 1px solid ${primaryBlue};
  padding-bottom: 0.5em;
`;

class CreateARetro extends Component {
  state = {
    selectedOption: "sprint"
  };

  handleOptionClick = optionType => {
    this.setState({
      selectedOption: optionType
    });
  };

  render() {
    return (
      <div>
        <CreateLabel>Create a Retro</CreateLabel>
        <div className="retroOptions">
          <RadioOption
            selected={this.state.selectedOption === "project"}
            onClick={() => this.handleOptionClick("project")}
          >
            Project Retro
          </RadioOption>
          <RadioOption
            selected={this.state.selectedOption === "sprint"}
            onClick={() => this.handleOptionClick("sprint")}
          >
            Sprint Retro
          </RadioOption>
        </div>
        <Link to={`/create-retro/${this.state.selectedOption}`}>
          <ContinueButton>Continue</ContinueButton>
        </Link>
      </div>
    );
  }
}

export default CreateARetro;
