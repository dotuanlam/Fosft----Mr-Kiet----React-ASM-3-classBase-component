import React, { Component } from "react";
import "../CSS/UserDertailInfor.scss";

class RenderUserDetailInfor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="infor">
        <div className="UserDetailInfor">
          <h1>User Detail Information</h1>
        </div>
        <div className="avatar">
          <img
            alt="avatar"
            src={this.props.infor.avatar ? this.props.infor.avatar : "Udating"}
          ></img>
        </div>
        <h3>
          Role:{this.props.infor.role ? this.props.infor.role : "Updating"}
        </h3>
        <h3>
          Email:{this.props.infor.email ? this.props.infor.email : "Updating"}
        </h3>
        <h3>
          Followers :
          {this.props.infor.followers ? this.props.infor.followers : "Updating"}
        </h3>
        <h3>
          Company:
          {this.props.infor.company ? this.props.infor.company : "Updating"}
        </h3>
      </div>
    );
  }
}

export default RenderUserDetailInfor;
