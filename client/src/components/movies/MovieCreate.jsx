import React, { Component } from "react";
import { connect } from "react-redux";
import { createMovie } from "../../actions";
import StreamForm from "./MovieForm";

class MovieCreate extends Component {
  onSubmit = fomValues => {
    this.props.createMovie(fomValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Movie</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createMovie }
)(MovieCreate);
