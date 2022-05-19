import "../CSS/Mounting.scss";
import React, { Component } from "react";

class HandleInputNameWaiting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-waiting">
        <h1>Please enter your name</h1>
      </div>
    );
  }
}

export default HandleInputNameWaiting;
