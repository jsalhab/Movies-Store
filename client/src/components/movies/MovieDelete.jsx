import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchMovie, deleteMovie } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieDelete extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteMovie(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return this.props.Movie
      ? `Are you sure you want to delete this Movie with title: ${
          this.props.Movie.title
        }`
      : "Are you sure you want to delete this Movie?";
  }

  render() {
    return (
      <Modal
        title="Delete Movie"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
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
  { fetchMovie, deleteMovie }
)(MovieDelete);
