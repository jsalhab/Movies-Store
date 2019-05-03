import React from "react";
import { fetchGenres } from "../actions";
import { connect } from "react-redux";

class ListGroup extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }
  render() {
    return (
      <div className="ui vertical pointing menu">
        {this.props.genres.map(item => (
          <div
            key={item.id}
            onClick={() => this.props.onItemSelect(item)}
            className={
              item === this.props.selectedItem ? "active item" : "item"
            }
          >
            {item["name"]}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // convert object to array
    genres: [{ name: "All Genres" }, ...Object.values(state.genres)],
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchGenres }
)(ListGroup);
