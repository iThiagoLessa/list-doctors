import React, { Component } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import TableDoctors from "../components/TableDoctors";
const URL = "http://localhost:3030/doctors";

export default class App extends Component {

  render() {
    return (
      <div className="container main-container">
        {/* Header */}
        <div className="row">
          <h2>Doctors</h2>
        </div>

        {/* FILTER AREA*/}
        <Filter />

        {/* CONTENT */}
        <TableDoctors />
      </div>
    );
  }
}
