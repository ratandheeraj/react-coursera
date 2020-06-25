import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card key="{dish.id}">
          <CardImg width="100%" src={dish.image} alt="{dish.name}" />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(dish) {
    if (dish != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {dish.comments.map((cmt) => {
              return (
                <li key="{cmt.id}">
                  <CardText style={{ fontSize: "1.2rem", paddingTop: "3%" }}>
                    {cmt.comment}
                  </CardText>
                  <CardText>
                    --{cmt.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(cmt.date)))}
                  </CardText>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const dish = this.props.dish;
    // const dishComments = this.props.dish.comments;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
        <div className="col-md-5 col-12 m-1">{this.renderComments(dish)}</div>
      </div>
    );
  }
}
export default DishDetail;
