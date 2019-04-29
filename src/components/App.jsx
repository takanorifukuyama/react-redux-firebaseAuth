import React, { Component } from 'react';
import '../App.css';

import UserInfoContainer from '../containers/UserInfoContainer'
import AuthContainer from '../containers/AuthContainer'
//import { firebaseApp } from '../firebase' //これ必要らしい

class App extends Component {
  
  render() {
    return (
      <div className="App">
        { this.props.uid? <UserInfoContainer /> : <AuthContainer /> }
        {/* {() =>{
          if(this.props.uid){
            return <UserInfoContainer />
          }else{
            return <AuthContainer />
          }
        }} */}
      </div>
    );
  }
}

export default App;
