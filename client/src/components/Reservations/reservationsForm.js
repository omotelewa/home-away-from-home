import React from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker  from "react-datepicker";

class ReservationsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalDateValue: null,
      departureDateValue: null,
    }
  }


  handleArrivalChange = (value) => {
    this.setState({
      arrivalDateValue: value // ISO String, ex: "2016-11-19T12:00:00.000Z",

    });

  }
  handleDepartureChange = (value) => {
    this.setState({
      departureDateValue: value // ISO String, ex: "2016-11-19T12:00:00.000Z",

    });
  }
  render() {
    return (

      
      <Form>
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
        <Form.Group>
          <Form.Label>Arrival Date:</Form.Label>
          <DatePicker id="arrival-datepicker" value={this.state.arrivalDateValue} onChange={this.handleArrivalChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Departure Date:</Form.Label>
          <DatePicker id="departure-datepicker" value={this.state.departureDateValue} onChange={this.handleDepartureChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
            </Button>
            
          </Form>
        


    )
  }
}

export default ReservationsForm;
