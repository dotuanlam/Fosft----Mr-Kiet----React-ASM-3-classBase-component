import React, { Component } from "react";
import "../CSS/GetNameInput.scss";

class GetInputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
    };
  }
  handleInputChange = (e) => {
    this.setState({
      inputName: (this.state.inputName = e.target.value),
    });
  };

  render() {
    return (
      <div className="form-input">
        <input onChange={(e) => this.handleInputChange(e)} placeholder=" " />
        <label className="lable-input">Name</label>
        <button
          className="btn-get"
          onClick={() => this.props.pushDataToStateInfor(this.state.inputName)}
        >
          Get
        </button>
      </div>
    );
  }
}

export default GetInputName;
