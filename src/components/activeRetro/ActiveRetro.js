import React, { Component } from "react";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResults from "./QuestionResults";
import WaitingForResults from "./WaitingForResults";
import Summary from "./Summary";
import { CenteredContent } from "../shared/LayoutContainers";

class ActiveRetro extends Component {
  state = {
    page: "ANSWER",
    presenter: true,
    lastQuestion: false,
    sessionName: this.props.match.params.sessionName
  };

  handleQuestionAnswered = () => {
    this.setState({
      page: "WAITING_FOR_RESULTS"
    });
  };

  handleAllResultsIn = () => {
    this.setState({
      page: "QUESTION_RESULTS"
    });
  };

  handleMoveOn = () => {
    this.setState({
      page: this.state.lastQuestion ? "ANSWER" : "SUMMARY"
    });
  };

  render() {
    return (
      <CenteredContent>
        {this.state.page === "ANSWER" && (
          <AnswerQuestion questionAnswered={this.handleQuestionAnswered} />
        )}
        {this.state.page === "WAITING_FOR_RESULTS" && (
          <WaitingForResults
            allResultsIn={this.handleAllResultsIn}
            presenter={this.state.presenter}
          />
        )}
        {this.state.page === "QUESTION_RESULTS" && (
          <QuestionResults moveOn={this.handleMoveOn} presenter={this.state.presenter} />
        )}
        {this.state.page === "SUMMARY" && <Summary />}
      </CenteredContent>
    );
  }
}

export default ActiveRetro;
