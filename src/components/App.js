import React, { Component } from 'react';
import '../App.css';

import UserInfoContainer from '../containers/UserInfoContainer'
import AuthContainer from '../containers/AuthContainer'
import { firebaseApp } from '../firebase'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        { this.props.uid? <UserInfoContainer /> : <AuthContainer /> }
      </div>
    );
  }
}

export default App;
