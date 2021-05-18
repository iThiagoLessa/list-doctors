import React from "react";

const Filter = (props) => {
  return (
    <div className="row">
      <div className="column column-20">Filter By:</div>
      <div className="column column-20">
        <select id="availabilityFilterSelect" onChange={props.handleAvailableDoctors}>
          <option value="all">All Doctors</option>
          <option value="available">Available Doctors</option>
        </select>
      </div>
      <div id="searchContainer"></div>
    </div>
  );
};
export default Filter;