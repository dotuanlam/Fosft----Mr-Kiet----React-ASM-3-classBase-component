import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      infor: {
        role: null,
        email: null,
        company: null,
        avatar: null,
        followers: 0,
      },
    };
  }
  onGettingName = (e) => {
    this.setState({
      nameInput: (this.state.nameInput = e.target.value),
    });
  };
  getData = (name) => {
    return fetch(`https://api.github.com/users/${name}`);
  };
  onGettingData = () => {
    this.getData(this.state.nameInput)
      .then((res) => res.json())
      .then((res) => {
        const avatar = res.avatar_url;
        const role = res.type;
        const email = res.email;
        const company = res.company;
        const followers = res.followers;
        this.setState({
          infor: (this.state.infor = {
            role: role,
            email: email,
            company: company,
            avatar: avatar,
            followers: followers,
          }),
        });
      });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="content">
            <div className="form-input">
              <input onChange={this.onGettingName} placeholder=" " />
              <label className="lable-input">Name</label>
              <button className="btn-get" onClick={this.onGettingData}>
                Get
              </button>
            </div>
            <div className="UserDetailInfor">
              <h1>User Detail Information</h1>
            </div>
            <div className="avatar">
              <img alt="avatar" src={this.state.infor.avatar}></img>
            </div>
            <h3>
              Role:{" "}
              {this.state.infor.role === "null"
                ? "Updating"
                : this.state.infor.role}
            </h3>
            <h3>
              Email:{" "}
              {this.state.infor.email === null
                ? "Updating"
                : this.state.infor.email}
            </h3>
            <h3>Number Of Follower: {this.state.infor.followers}</h3>
            <h3>
              Company:{" "}
              {this.state.infor.company === null
                ? "Updating"
                : this.state.infor.company}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
