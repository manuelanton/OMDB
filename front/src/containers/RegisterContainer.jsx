import React from "react";
import axios from "axios";
import Register from "../components/Form";

class RegisterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userValue: "",
      passValue: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(evt) {
    this.setState({ userValue: evt.target.value });
  }

  handlePassInput(evt) {
    this.setState({ passValue: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userValue && this.state.passValue) {
      axios.post("/api/auth/register", {
        username: this.state.userValue,
        password: this.state.passValue
      });
      this.props.history.push("/users/login");
    }
  }

  render() {
    return (
      <Register
        handlePassInput={this.handlePassInput}
        handleSubmit={this.handleSubmit}
        handleUserInput={this.handleUserInput}
      />
    );
  }
}

export default RegisterContainer;
