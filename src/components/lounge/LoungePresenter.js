import React, { Component } from "react";
import Lounge from "./Lounge";
import { Button } from "../shared/Buttons";
import { Link } from "react-router-dom";

class LoungePresenter extends Component {
  render() {
    return (
      <Lounge sessionName={this.props.match.params.sessionName}>
        <Link to={"/retro/" + this.props.match.params.sessionName}>
          <Button>Start Retro!</Button>
        </Link>
      </Lounge>
    );
  }
}

export default LoungePresenter;
