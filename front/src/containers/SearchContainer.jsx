import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions";
import Search from "../components/Search";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.inputValue) {
      this.props.fetchMovies(this.state.inputValue);
    }
  }

  render() {
    console.log(this.props);
    return (
      <Search
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies: movies
});

const mapDispatchStateToProps = dispatch => ({
  fetchMovies: name => dispatch(fetchMovies(name))
});

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(SearchContainer);
