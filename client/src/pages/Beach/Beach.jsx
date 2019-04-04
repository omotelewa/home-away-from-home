import React from "react";
import "./Beach.css";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/src/stylesheets/datepicker-cssmodules.scss";

class Beach extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrivalDate: "",
      departureDate: ""
    };
  }

  handleArrivalDateChange = date => {
    this.setState({
      arrivalDate: date
    });
  };

  handleDepartureDateChange = date => {
    this.setState({
      departureDate: date
    });
  };

  handleFormSubmit = formData => {
    // todo: add logic
  };

  render() {
    return (
      <div className="beachDiv">
        <div className="container">
          <h1 className="header">Beach Houses</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, corrupti quo repellendus alias deleniti nostrum
            accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis,
            excepturi unde repellendus quisquam odit aut dolorum ut assumenda?
            Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae
            beatae assumenda velit voluptas alias?
          </p>
        </div>
        <div className="res-form">
          <Form>
            <Form.Group controlId="arrival">
              <Form.Label>Arrival Date</Form.Label>
              <DatePicker
                selected={this.state.arrivalDate}
                onChange={this.handleArrivalDateChange}
              />
            </Form.Group>
            <Form.Group controlId="departure">
              <Form.Label>Departure Date</Form.Label>
              <DatePicker
                selected={this.state.departureDate}
                onChange={this.handleDepartureDateChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Reserve my spot
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Beach;
