import React from "react";
import PropertyTable from "../../components/PropertyTable"
import { white } from "material-ui/styles/colors";

class MoreInfo extends React.Component {
  render() {
    return (
      <div className="infoDiv">
        <div className="container">
          <h1 className="header">More Info</h1>
          <div style={{background: "white", borderRadius: "12px", boxShadow: "10px 10px 10px black", padding: "0 2%", opacity: ".8"}}>

         <PropertyTable />
          </div>
        </div>
      </div>
    );
  }
}

export default MoreInfo;
