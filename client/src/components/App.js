import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import MovieCreate from "./movies/MovieCreate";
import MovieDelete from "./movies/MovieDelete";
import MovieEdit from "./movies/MovieEdit";
import MoviesList from "./movies/MoviesList";
import MovieShow from "./movies/MovieShow";
import Header from "./Header";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={MoviesList} />
              <Route exact path="/movies/new" component={MovieCreate} />
              <Route exact path="/movies/delete/:id" component={MovieDelete} />
              <Route exact path="/movies/edit/:id" component={MovieEdit} />
              <Route exact path="/movies/:id" component={MovieShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
