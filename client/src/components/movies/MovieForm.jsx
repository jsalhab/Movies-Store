import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class MovieForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = fomValues => {
    this.props.onSubmit(fomValues);
  };

  render() {
    //console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Field
          name="genre.name"
          component={this.renderInput}
          label="Enter Genre"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = fomValues => {
  const errors = {};
  if (!fomValues.title) {
    errors.title = "You must enter a title";
  }
  if (!fomValues.description) {
    errors.description = "You must enter a description";
  }
  if (!fomValues.genre) {
    errors.genre = "You must enter a genre";
  }
  return errors;
};

export default reduxForm({
  form: "MovieForm",
  validate: validate
})(MovieForm);
