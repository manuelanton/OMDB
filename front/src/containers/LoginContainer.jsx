import React from "react";
import axios from "axios";
import Login from "../components/Form";
import { receiveUser, fetchFavs } from "../store/actions";
import { connect } from "react-redux";

class LoginContainer extends React.Component {
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
      axios
        .post("/api/auth/login", {
          username: this.state.userValue,
          password: this.state.passValue
        })
        .then(res => res.data)
        .then(user => {
          this.props.receiveUser(user);
          this.props.history.push("/");
        })
        .then(() => this.props.fetchFavs());
    }
  }

  render() {
    return (
      <Login
        handlePassInput={this.handlePassInput}
        handleSubmit={this.handleSubmit}
        handleUserInput={this.handleUserInput}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchFavs: () => dispatch(fetchFavs())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
