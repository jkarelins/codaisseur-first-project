import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="cardCover">
        <div className="card imgOfFeed mb-3">
          <img src={this.props.imageSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    );
  }
}
