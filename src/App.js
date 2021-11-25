import React from "react";
import Login from "./login_page";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SingIn: false,
    };
  }

  Log = () => {
      this.setState({SingIn:true})
  }

  render() {
    if (this.state.SingIn) {
        return(
            <div>valera</div>
        );
    } else {
      return <Login SignIn={this.Log} />;
    }
  }
}

export default App;
