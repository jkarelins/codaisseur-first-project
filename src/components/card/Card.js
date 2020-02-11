import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  state = {
    like: 0
  };

  increment = () => {
    this.setState({
      like: this.state.like + 1
    });
  };

  decrement = () => {
    this.setState({
      like: this.state.like - 1
    });
  };
  render() {
    return (
      <div className="cardCover">
        <div className="card imgOfFeed mb-3">
          <img src={this.props.imageSrc} className="card-img-top" alt="..." />
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
      </div>
    );
  }
}
