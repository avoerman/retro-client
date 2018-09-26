import React, { Component } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Subscription, Mutation } from "react-apollo";
import { CenteredContent } from "../shared/LayoutContainers";

const JoinCount = styled.div`
  margin-bottom: 2em;
`;

const USER_JOINED_SUBSCRIPTION = gql`
  subscription userJoined($sessionName: String!) {
    userJoined(sessionName: $sessionName) {
      sessionName
      joinedUsers
    }
  }
`;

const JOIN_SESSION = gql`
  mutation joinSession($sessionName: String!) {
    joinSession(sessionName: $sessionName) {
      sessionName
      joinedUsers
    }
  }
`;

class InvokeMutation extends Component {
  componentDidMount() {
    this.props.joinMutation();
  }

  render() {
    return "";
  }
}

class Lounge extends Component {
  state = {
    join: false
  };

  sessionName = this.props.sessionName || this.props.match.params.sessionName;

  joined = () => {
    this.setState({
      join: false
    });
  };

  componentDidMount() {
    // hack to run mutation immediately after subscription
    setTimeout(() => {
      this.setState({
        join: true
      });
    }, 100);
  }

  render() {
    return (
      <CenteredContent centerAll={true}>
        <h2>Waiting for participants to join...</h2>
        <Mutation
          mutation={JOIN_SESSION}
          variables={{ sessionName: this.sessionName }}
          onCompleted={() => this.joined()}
        >
          {(joinMutation, { data }) => (
            <Subscription
              subscription={USER_JOINED_SUBSCRIPTION}
              variables={{ sessionName: this.sessionName }}
              shouldResubscribe={true}
            >
              {({ data, loading }) => (
                <div>
                  <JoinCount>{loading ? "..." : this.joinedMessage(data)}</JoinCount>
                  {this.state.join && <InvokeMutation joinMutation={joinMutation} />}
                </div>
              )}
            </Subscription>
          )}
        </Mutation>

        {this.props.children}
      </CenteredContent>
    );
  }

  joinedMessage(data) {
    return data && data.userJoined
      ? `${data.userJoined.joinedUsers.length} participants have joined`
      : "Error joining retro.";
  }
}

export default Lounge;
