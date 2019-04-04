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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, corrupti quo repellendus alias deleniti nostrum
            accusamus nihil a! Non eos, quidem sequi necessitatibus eius nobis,
            excepturi unde repellendus quisquam odit aut dolorum ut assumenda?
            Fuga sint quae saepe cum quas minima aut numquam. Illum, recusandae
            beatae assumenda velit voluptas alias?
          </p>
        </div>
        <ReservationForm />
      </div>
    );
  }
}

export default Beach;
