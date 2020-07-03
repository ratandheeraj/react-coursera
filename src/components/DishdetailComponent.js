import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                model=".rating"
                name="rating"
                className="form-control"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>

              <Label htmlFor="author" className="mt-2">
                Your Name
              </Label>
              <Control.text
                model=".author"
                name="author"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  required: "Required ",
                  minLength: "Your name must atleast be 3 characters",
                  maxLength: "Your name cannot exceed 15 characters",
                }}
              />
              <Label htmlFor="comment" className="mt-2">
                Comments
              </Label>
              <Control.textarea
                model=".comment"
                name="comment"
                className="form-control"
                rows="6"
              ></Control.textarea>
              <Button
                type="submit"
                className="mt-2"
                color="primary"
                onClick={this.toggleModal}
              >
                Sumbit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

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
            {dish.map((cmt) => {
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
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
          <div className="col-md-5 col-12 m-1">
            {this.renderComments(this.props.comments)}
            <CommentForm
              addComment={this.props.addComment}
              dishId={this.props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetail;
