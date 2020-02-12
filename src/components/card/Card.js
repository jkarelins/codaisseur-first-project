import React, { Component } from "react";
import "./Card.css";
import Comments from "../Comments/Comments";

export default class Card extends Component {
  state = {
    like: 0,
    clicked: false
  };

  increment = () => {
    if (!this.state.clicked) {
      this.setState({
        like: this.state.like + 1,
        clicked: true
      });
    }
  };

  decrement = () => {
    if (!this.state.clicked) {
      this.setState({
        like: this.state.like - 1,
        clicked: true
      });
    }
  };
  render() {
    return (
      <div className="card mb-3">
        <img
          src={this.props.imageSrc}
          className="card-img-top img-fluid dogImage"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <button className="btn btn-outline-dark" onClick={this.increment}>
              <i className="fab fa-gratipay"> </i>
            </button>
            <button
              className="btn btn-outline-dark ml-3"
              onClick={this.decrement}
            >
              <i className="fas fa-heart-broken"></i>
            </button>{" "}
            {this.state.like}
          </h5>

          <p className="card-text">Comments </p>
        </div>
      </div>
    );
  }
}
