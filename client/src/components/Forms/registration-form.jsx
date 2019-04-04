import React from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/src/stylesheets/datepicker-cssmodules.scss";

class ReservationForm extends React.Component {
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
      <div className="res-form">
        <h3>Book this space</h3>
        <Form>
          <Form.Group controlId="arrival">
            <Form.Label>Arrival Date</Form.Label>
            <DatePicker
              selected={this.state.arrivalDate}
              onChange={this.handleArrivalDateChange}
              placeholderText="Select arrival date"
            />
          </Form.Group>
          <Form.Group controlId="departure">
            <Form.Label>Departure Date</Form.Label>
            <DatePicker
              selected={this.state.departureDate}
              onChange={this.handleDepartureDateChange}
              placeholderText="Select departure date"
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
    );
  }
}

export default ReservationForm;
