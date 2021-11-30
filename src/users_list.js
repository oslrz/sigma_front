import React from "react";
import User from "./user_elem";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      reg_login:null,
      reg_pass:null
    };
    this.HandleRegLogin = this.HandleRegLogin.bind(this);
    this.HandleRegPass = this.HandleRegPass.bind(this);
    this.Register = this.Register.bind(this);
  }
  HandleRegLogin(event){
    this.setState({reg_login:event.target.value})
  }
  HandleRegPass(event){
    this.setState({reg_pass:event.target.value})
  }

  Register(){
    let data = JSON.stringify({
      login:this.state.reg_login,
      pass:this.state.reg_pass
    })
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:9000/register", true);
    request.responseType='json'
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Bearer " + this.props.token);
    request.addEventListener("load", () => {
      if(request.status == 404){
        alert(request.response.message)
      }else{
        alert("you have been registered");
        this.setState({reg:false})
      }
    });
    request.send(data);
  }

  deleteElem = (id) =>{
    let data = JSON.parse(this.state.data);
    let new_data = []
    for(let i = 0;i<data.length;i++){
      if(data[i].id != id){
        new_data[new_data.length] = data[i];
      }
    }
    new_data=JSON.stringify(new_data)
    this.setState({data:new_data})
  }

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:9000/getAll", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Bearer " + this.props.token);
    console.log("Bearer " + localStorage.getItem("token"));
    request.addEventListener("load", () => {
      this.setState({ data: request.response });
    });
    request.send();
  }

  render() {
    if (this.props.reg) {
      return ( <div className="login_form">
      <h1>Register</h1>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          login
        </span>
        <input
          onChange={this.HandleRegLogin}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          password
        </span>
        <input
          onChange={this.HandleRegPass}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div className="btn_group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.Register}
        >
          Register
        </button>
      </div>
    </div>);
    } else {
      let data = JSON.parse(this.state.data);
      if (data === null) {
        return <div>users</div>;
      } else {
        return (
          <div className="users">
            {data.map((user) => (
              <User login={user.login} key={user.id} id={user.id} token={this.props.token} deleteElem = {this.deleteElem}/>
            ))}
          </div>
        );
      }
    }
  }
}

export default Users;
