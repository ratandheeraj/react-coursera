import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  // CardText,
  CardTitle,
  // CardBody,
} from "reactstrap";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // return <h1>{this.props.dish.name}</h1>;
  render() {
    return (
      // <Card key={this.props.dish.id}>
      //   <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
      //   <CardBody>
      //     <CardTitle>{this.props.dish.name}</CardTitle>
      //     <CardText>{this.props.dish.description}</CardText>
      //   </CardBody>
      // </Card>
      <Card key={this.props.dish.id}>
        <h1>{this.props.dish.name}</h1>
        <img src={this.props.dish.image} alt={this.props.dish.name} />
      </Card>
    );
  }
}
export default Test;
