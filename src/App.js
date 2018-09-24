import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import GenerateRetro from './components/generateRetro/GenerateRetro';
import Lounge from "./components/lounge/Lounge";
import LoungePresenter from "./components/lounge/LoungePresenter";
import ActiveRetro from "./components/activeRetro/ActiveRetro";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lounge/:sessionName" component={Lounge} />
        <Route path="/lounge-creator/:sessionName" component={LoungePresenter} />
        <Route path="/retro/:sessionName" component={ActiveRetro} />
        <Route path="/create-retro" component={GenerateRetro} />
      </Switch>
    );
  }
}

export default App;
