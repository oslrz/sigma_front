import React from "react";
import Login from "./login_page";
import Users from "./users_list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SignIn: false,
      reg:false,
      bttn:'Sign up',
      token:null
    };
    this.LogOut = this.LogOut.bind(this);
  }

  componentDidMount() {
    console.log(!!localStorage.getItem("user"));
    if (!!localStorage.getItem("user")) {
      this.setState({ SignIn: true });
    }
    if(!!localStorage.getItem("token")){
      this.setState({token:localStorage.getItem("token")})
    }
  }
  
  Reg = () => {
    if(this.state.reg){
      this.setState({reg:!this.state.reg,bttn:'Sign up'})
    }else{
      this.setState({reg:!this.state.reg,bttn:'Back'})
    }
    
  }

  Log = (data) => {
    console.log('data',data)
    this.setState({ SignIn: true,token:data.token });
    localStorage.setItem("user", true);
    localStorage.setItem("token",data.token)
  };

  LogOut() {
    this.setState({ SignIn: false });
    localStorage.removeItem("user");
    localStorage.removeItem("token")
  }

  render() {
    if (this.state.SignIn) {
      return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                test
              </a>
              <div className="d-flex">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={this.Reg}
                >
                  {this.state.bttn}
                </button>
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={this.LogOut}
                >
                  Exit
                </button>
              </div>
            </div>
          </nav>
          <Users reg={this.state.reg} token={this.state.token}/>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                test
              </a>
            </div>
          </nav>
          <Login SignIn={this.Log} />
        </div>
      );
    }
  }
}

export default App;
