import React from "react";
import { connect } from "react-redux";
import { fetchMovies, emptyMovies, emptyUser } from "../store/actions";
import Search from "../components/Search";
import axios from "axios";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.inputValue) this.props.fetchMovies(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  handleLogout() {
    axios
      .get("/api/users/logout")
      .then(res => res.data)
      .then(() => this.props.emptyUser());
  }

  render() {
    return (
      <Search
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLogout={this.handleLogout}
        inputValue={this.state.inputValue}
        emptyMovies={this.props.emptyMovies}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = ({ movies, user }) => ({
  movies: movies,
  user
});

const mapDispatchStateToProps = dispatch => ({
  fetchMovies: name => dispatch(fetchMovies(name)),
  emptyMovies: () => dispatch(emptyMovies()),
  emptyUser: () => dispatch(emptyUser())
});

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(SearchContainer);
