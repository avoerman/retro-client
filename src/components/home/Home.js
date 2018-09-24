import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateARetro from "./CreateARetro";
import { Button } from "../shared/Buttons";
import { Input } from "../shared/Forms";
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CreateARetroContainer = styled.div`
  margin-left: auto;
  margin-right: 2em;
`;

const SessionNameInput = styled(Input)`
  width: 40vw;
  min-width: 4em;
  max-width: 40em;
`;

const JoinButton = styled(Button)`
  margin-left: -1px;
`;

class Home extends Component {
  state = {
    sessionName: "",
    selectedOption: "SPRINT"
  };

  handleSessionChange = e => {
    this.setState({
      sessionName: e.target.value
    });
  };

  render() {
    return (
      <HomeContainer>
        <CreateARetroContainer>
          <CreateARetro />
        </CreateARetroContainer>
        <div>
          <div className="logo">
            <img src={"/assets/images/retro_logo.png"} />
          </div>
          <div style={{ display: "flex" }}>
            <SessionNameInput
              name="sessionName"
              type="text"
              placeholder="Enter retro code here"
              onChange={this.handleSessionChange}
            />
            <Link to={"lounge/" + this.state.sessionName}>
              <JoinButton className="joinBtn">Join</JoinButton>
            </Link>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

export default Home;
