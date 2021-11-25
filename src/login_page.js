import "./login_page.css";
import React from "react";

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: null,
      pass:null
    }
    this.HandleLogin = this.HandleLogin.bind(this)
    this.HanldePass = this.HanldePass.bind(this)
    this.SignIn = this.SignIn.bind(this)
  }
  HandleLogin(event){
    //console.log(event.target.value)
    this.setState({login:event.target.value})
  }
  HanldePass(event){
    this.setState({pass:event.target.value})
  }
  SignIn(){
    this.props.SignIn()
    console.log(this.state)
  }
  render(){
    return (
    <div className="login_form">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          login
        </span>
        <input
        onChange={this.HandleLogin}
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
        onChange={this.HanldePass}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={this.SignIn}>Sign in</button>
    </div>
  );
  }
  
}

export default Login;
