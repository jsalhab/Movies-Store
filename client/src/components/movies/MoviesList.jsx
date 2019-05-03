import React from "react";
import { connect } from "react-redux";
import { fetchMovies, fetchGenres } from "../../actions";
import { Link } from "react-router-dom";
import ListGroup from "../groupList";

class MoviesList extends React.Component {
  state = {
    selectedGenre: ""
  };
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }
  rednderAdmin(movie) {
    if (movie.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/Movies/edit/${movie.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/Movies/delete/${movie.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  handleGenreSelect = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre });
  };
  renderList() {
    return <div />;
  }

  renderCreat() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/movies/new" className="ui button primary create-button">
            Creat Movie
          </Link>
        </div>
      );
    }
  }
  render() {
    const { selectedGenre } = this.state;
    const { movies } = this.props;
    const filteredMovies =
      selectedGenre && selectedGenre.id
        ? movies.filter(m => m.genre.id === selectedGenre.id)
        : movies;
    return (
      <div className="ui grid">
        <div className="six wide column">
          <ListGroup
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="ten wide column">
          <div>
            <table className="ui called table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Description</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {filteredMovies.map(movie => (
                  <tr key={movie.id}>
                    <td className="data-label">
                      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </td>
                    <td className="data-label">{movie.genre.name}</td>
                    <td className="data-label">{movie.description}</td>
                    <td className="data-label">{this.rednderAdmin(movie)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {this.renderCreat()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // convert object to array
    movies: Object.values(state.movies),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchMovies, fetchGenres }
)(MoviesList);
