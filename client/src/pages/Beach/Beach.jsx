import React from "react";
import "./Beach.css";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/src/stylesheets/datepicker-cssmodules.scss";

class Beach extends React.Component {
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
        <DatePicker selected={null} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Beach;
