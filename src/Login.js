import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import bglogin from './image/bglogin.png';
import './login.css';

const LoginButton = (props) => {
  //<Link to='/SellAndBuy'><button onClick={props.onClick}>Sign in</button></Link>
  return (
    <button class="btn" onClick={props.onClick}>Sign in with KU Account</button>
  )
}

class Login extends React.Component {
  signin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      'hd': 'ku.th'
    })

    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('uid: ',user.uid)
      console.log(window.location);
      window.location.href = "/SellAndBuy"; //ทำให้รอ log in เสร็จก่อนค่อยเปลี่ยนหน้า
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  render() {
    return (
      <div class="bg">
        <div class = "container">
          <img src={bglogin} class="setimg"/>
          <LoginButton onClick={this.signin} />
        </div>
      </div >
    );
  }
}

export default Login;