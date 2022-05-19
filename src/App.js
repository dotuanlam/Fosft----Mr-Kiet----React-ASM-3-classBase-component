import React, { Component } from "react";
import GetInputName from "./components/GetNameInput";
import RenderUserDetailInfor from "./components/UserDetailInfor";
import WaitForInputname from "./components/Mounting";
import LoadingData from "./components/LoadingData";
import "./CSS/App.scss";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nameInput: "",
      infor: {
        role: null,
        email: null,
        company: null,
        avatar: null,
        followers: null,
      },
    };
  }

  componentDidMount(prevProps, prevState) {
    if (prevState != this.state.infor) {
      return setInterval(() => {
        this.getData("name")
          .then((res) => res.json())
          .then((res) => {
            const avatar = res?.avatar_url;
            const role = res?.type;
            const email = res?.email;
            const company = res?.company;
            const followers = res?.followers;
            this.setState({
              loading: (this.state.loading = false),
            });
            this.setState({
              infor: (this.state.infor = {
                role: role,
                email: email,
                company: company,
                avatar: avatar,
                followers: followers,
              }),
            });
          })
          .catch((erro) => console.log("Error 404"));
      }, 5000);
    }
  }

  getData = (name) => {
    this.setState({
      loading: (this.state.loading = true),
    });
    return fetch(`https://api.github.com/users/${name}`);
  };
  pushDataToStateInfor = (name) => {
    this.getData(name)
      .then((res) => res.json())
      .then((res) => {
        const avatar = res?.avatar_url;
        const role = res?.type;
        const email = res?.email;
        const company = res?.company;
        const followers = res?.followers;
        this.setState({
          loading: (this.state.loading = false),
        });
        this.setState({
          infor: (this.state.infor = {
            role: role,
            email: email,
            company: company,
            avatar: avatar,
            followers: followers,
          }),
        });
      })
      .catch((erro) => console.log("Error 404"));
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="content">
            <GetInputName pushDataToStateInfor={this.pushDataToStateInfor} />
            {(this.state.infor.avatar && this.state.role) === null ? (
              <WaitForInputname />
            ) : this.state.loading ? (
              <LoadingData />
            ) : (
              <RenderUserDetailInfor infor={this.state.infor} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
