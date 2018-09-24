import React, { Component } from "react";
import { Button } from "../shared/Buttons";
import { CenteredContent } from "../shared/LayoutContainers";

class WaitingForResults extends Component {
  render() {
    return (
      <CenteredContent centerAll={true}>
        <div style={{ marginBottom: "1em" }}>Waiting for all responses...</div>

        {this.props.presenter && (
          <Button onClick={this.props.allResultsIn}>Force move to results</Button>
        )}
      </CenteredContent>
    );
  }
}

export default WaitingForResults;
