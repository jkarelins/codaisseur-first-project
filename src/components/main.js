import React, { Component } from "react";
import Card from "./card/Card";

export default class Main extends Component {
  state = {
    images: [],
    loading: true
  };
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(images => images.json())
      .then(images => {
        return this.setState({
          images: images.message,
          loading: false
        });
      })
      .catch(error => {
        this.setState(state => ({
          error: "Check your request",
          loading: false
        }));
      });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      return (
        <div>
          {this.state.images.map((image, index) => (
            <Card key={index} imageSrc={image} />
          ))}
        </div>
      );
    }
  }
}
