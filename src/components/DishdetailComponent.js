import React, {
  Component,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
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
    if (dish.comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <li>
              <p>{dish.comments.comment}</p>
            </li>
            <li>
              <p>
                --{dish.comments.author},{dish.comments.date}
              </p>
            </li>
          </ul>
        </div>
      );
    }
  }
  render() {
    const detailedDish = this.props.dishes;
    return (
      <div className="row">
        <div className="col-md-5 col-12 m-1">
          {this.renderDish(this.state.detailedDish)}
        </div>
        <div className="col-md-5 col-12 m-1">
          {this.renderComments(this.state.detailedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
