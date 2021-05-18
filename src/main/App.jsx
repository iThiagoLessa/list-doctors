import React, { Component } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import TableDoctors from "../components/TableDoctors";
const URL = "http://localhost:3030/doctors";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAvailableDoctors = this.handleAvailableDoctors.bind(this);
    this.state = {
      savedInfos: null,
      edit: false,
      doctors: []
    };
  }

  componentDidMount() {
    this.handleSaveInfos();
  }

  handleSaveInfos() {
    const doctorsRows = document.querySelectorAll("#doctors tr");
    const doctors = Array.from(doctorsRows).reduce((acc, cur) => {
      const upin = cur.dataset.upin;
      const name = cur.querySelector("td.name").innerText;
      const zipcode = cur.querySelector("td.zipcode").innerText;
      const city = cur.querySelector("td.city").innerText;
      acc.push({ upin, name, zipcode, city });
      return acc;
    }, []);
    this.setState({savedInfos:doctors});
  }

  handleAvailableDoctors(e) {
    const available = e.target.value == "available" ? true : false;
    axios.get(`${URL}`).then((resp) => {
      if (available) {
        const doctorAvailable = resp.data.filter(
          (doctor) => doctor.available === true
        );
        const arr = [];
        const mapDoctor = doctorAvailable.map(doctor => {
          const addInfos = this.state.savedInfos.find(element => element.upin == doctor.upin);
          doctor.city = addInfos.city;
          doctor.zipcode = addInfos.zipcode;
          arr.push(doctor);
        });
        this.setState({doctors: doctorAvailable, edit: true});
      } else {
        const allDoctors = resp.data;
        const arr = [];
        const mapDoctor = allDoctors.map(doctor => {
          const addInfos = this.state.savedInfos.find(element => element.upin == doctor.upin);
          doctor.city = addInfos.city;
          doctor.zipcode = addInfos.zipcode;
          arr.push(doctor);
        });
        this.setState({doctors: arr});
      }
    });
  }

  render() {
    return (
      <div className="container main-container">
        {/* Header */}
        <div className="row">
          <h2>Doctors</h2>
        </div>

        {/* FILTER AREA*/}
        <Filter handleAvailableDoctors={this.handleAvailableDoctors} />

        {/* CONTENT */}
        <TableDoctors doctors={this.state.doctors} savedInfos={this.state.savedInfos} validator={this.state.edit} />
      </div>
    );
  }
}
