import React from "react";

const App = (props) => {
  return (
    <div className="container main-container">
      {/* Header */}
      <div className="row">
        <h2>Doctors</h2>
      </div>

      {/* FILTER AREA*/}
      <div className="row">
        <div className="column column-20">Filter By:</div>
        <div className="column column-20">
          <select id="availabilityFilterSelect">
              <option value="all">All Doctors</option>
              <option value="available">Available Doctors</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
