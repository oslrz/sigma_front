import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.DeleteUser = this.DeleteUser.bind(this)
  }
  DeleteUser(){
    let data = JSON.stringify({
      id:this.props.id
    });
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:9000/deleteUser", true);
    request.setRequestHeader("Authorization", "Bearer " + this.props.token);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      if(request.status == 404){
        alert(request.response.message)
      }else{
        this.props.deleteElem(this.props.id)
      }
    });
    request.send(data);

  }

  render() {
    return (<div className="card">
      <h5 className="card-title">{this.props.login}</h5>
    <div className="card-body">
     ID: {this.props.id}
    </div>
    <a className="btn btn-danger" onClick={this.DeleteUser}>Delete user</a>
  </div>)
  }
}

export default User;
