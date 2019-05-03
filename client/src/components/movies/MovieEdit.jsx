import React from "react";
import { connect } from "react-redux";
import { fetchMovie, editMovie } from "../../actions";
import MovieForm from "./MovieForm";
import _ from "lodash";

class MovieEdit extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  onSubmit = fomValues => {
    this.props.editMovie(this.props.match.params.id, fomValues);
  };
  render() {
    console.log(this.props.movie);
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Movie</h3>
        <MovieForm
          initialValues={_.pick(
            this.props.movie,
            "title",
            "description",
            "genre"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie, editMovie }
)(MovieEdit);
