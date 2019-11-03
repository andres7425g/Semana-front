import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Logged from "../Views/Logged";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
        >
          <img src={this.state.picture} alt={this.state.name} />
          {console.log(this.state)}
          <h2>Welcome: <br></br> {this.state.name}</h2>
          <h2>Find out the latest news with us</h2>
          <Logged/>
          
        </div>
      );
    } else {
      fbContent = (
          <FacebookLogin
          appId="2867028419984246"
          autoLoad={true}
          fields="name,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          />
          );
        }

    return <div>{fbContent}</div>;
  }
}
