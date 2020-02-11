import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="cardCover">
        <div className="card imgOfFeed mb-3">
          <img src={this.props.imageSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <button className="btn btn-outline-dark">
                <i className="fab fa-gratipay"></i>{" "}
              </button>{" "}
              Nr: 111
            </h5>

            <p className="card-text">test</p>
          </div>
        </div>
      </div>
    );
  }
}
