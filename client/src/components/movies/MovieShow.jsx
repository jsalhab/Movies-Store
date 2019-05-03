import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions";

class MovieShow extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    const { title, description, genre } = this.props.movie;
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{title}</div>
        </div>
        <div className="content">
          <div className="summary">{`Description: ${description}`}</div>
          <div className="summary">{`Genre: ${genre.name}`}</div>
        </div>
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
  { fetchMovie }
)(MovieShow);
