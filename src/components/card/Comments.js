import React, { Component } from "react";

export default class Comments extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  };

  state = {
    name: "",
    message: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.name);
    this.setState({
      name: "";
      message: "";
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Message:
            <input
              type="text"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </label>
          <input type="submit" value="Add Comment" />
        </form>
      </div>
    );
  }
}
