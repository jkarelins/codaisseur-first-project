import React, { Component } from "react";
import Card from "./card/Card";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Card imageSrc="https://images.dog.ceo/breeds/dachshund/kaninchen-dachshund-953699_640.jpg" />
        <Card imageSrc="https://images.dog.ceo/breeds/pomeranian/n02112018_653.jpg" />
        <Card imageSrc="https://images.dog.ceo/breeds/pomeranian/n02112018_653.jpg" />
      </div>
    );
  }
}
