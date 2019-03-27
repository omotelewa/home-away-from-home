import React from "react";
import { Button, Modal, Form } from "react-bootstrap";


class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      validated: false,
      password: "",
      confirm: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  };

  handlePassword(event) {
    event.preventDefault();
    this.setState({ password: this.val()})
  };

  handleConfirm(event) {
    event.preventDefault();
    this.setState({ confirm: this.val()})
  };

  handleValidation(event) {

    const form = event.current.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.setState({validated: true})
  };

  render() {
    const { validated } = this.state;
    return (
      <>
        <Button variant="info" onClick={this.handleShow}>
          Sign Up
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
            <Form 
              validated={validated} 
              onSubmit={event => this.handleValidation(event)}
            >
          <Modal.Body>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  required
                  type="email" 
                  placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  required
                  id="confirm"
                  type="password" 
                  placeholder="password" 
                />
                <Form.Label>Confirm</Form.Label>
                <Form.Control 
                  required
                  id="confirm"
                  type="password" 
                  placeholder="Confirm" 
                />
              </Form.Group>
                <Form.Control.Feedback>Password doesn't match.</Form.Control.Feedback>

          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
  }
}

export default Signup;