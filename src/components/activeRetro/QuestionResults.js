import React, { Component } from "react";
import { Button } from "../shared/Buttons";
import { CenteredContent } from "../shared/LayoutContainers";

class QuestionResults extends Component {
  render() {
    return (
      <CenteredContent centerAll={true}>
        <div style={{ marginBottom: "1em" }}>These are the results of the questions</div>

        {this.props.presenter && <Button onClick={this.props.moveOn}>Move to next question</Button>}
      </CenteredContent>
    );
  }
}

export default QuestionResults;
