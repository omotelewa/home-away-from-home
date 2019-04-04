import React from "react";
import "./Beach.css";
import ReservationForm from "../../components/Forms/registration-form";

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
          <p>The perfect cozy beach house for your summer and spring accomodations.  What are you waiting for? The beach house has limited chalet for our renters and first time exprience vacationers at our spot.  Once you come to our beach houses there will be not turning back.  We have a two week advance booking policy so please hurry and secure your house.</p>
        </div>
        <ReservationForm />
      </div>
    );
  }
}

export default Beach;
