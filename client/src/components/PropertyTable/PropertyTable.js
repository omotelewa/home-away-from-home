import React, { Component } from "react";
import "./PropertyTable.css";
import Table from 'react-bootstrap/Table'
import API from "../../utils/API";



class PropertyTable extends Component {

  state = {
    PropertyList: []
  };

  componentDidMount() {
    this.getProperties();
  };

  getProperties = () => {
    API.getProperties()
      .then(res => this.setState({ PropertyList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.PropertyList.length
          ? ""
          : (
            <React.Fragment>
              <br />
              <Table striped hover size="sm">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr className="table-info">
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
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