import React, { Component } from "react";
import "./PropertyTable.css";
import Table from 'react-bootstrap/Table'
import API from "../../utils/API";


class PropertyTable extends Component {

  state = {
    PropertyList: [],
    color: false
  };

  componentDidMount() {
    this.getProperties();
  };

  getProperties = () => {
    API.getProperties()
      .then(res => this.setState({ PropertyList: res.data }))
      .catch(err => console.log(err));
  };

  handleRowColor = () => {
    this.state.color
      ? this.setState({ color: false })
      : this.setState({ color: true })
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.PropertyList.length
          ? ""
          : (
            <React.Fragment>
              <hr />
              <Table striped hover size="sm">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Amenities</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.PropertyList.map(property => {
                    return (

                      <tr>
                        <td>{property.name}</td>
                        <td>{property.location}</td>
                        <td>{property.amenities}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </React.Fragment>
          )
        };
      </React.Fragment>
    );
  };
};

export default PropertyTable;