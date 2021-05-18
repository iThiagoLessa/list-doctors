import React from "react";

const TableDoctors = (props) => {
  //console.log(props.doctors)
  if (props.validator) {
    return (
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ZipCode</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.doctors.map((doctor, index) => {
              return (
                <tr data-upin={doctor.upin} key={index}>
                  <td>{doctor.name}</td>
                  <td>{doctor.zipcode}</td>
                  <td>{doctor.city}</td>
                  <td>
                    <button className="button button-outline">
                      Mark as {doctor.available ? 'available' : 'unavailable'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ZipCode</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="doctors">
            <tr data-upin="202029">
              <td className="name">John Doe</td>
              <td className="zipcode">92037</td>
              <td className="city">La Jolla</td>
              <td>
                <button className="button button-outline">
                  Mark as Available
                </button>
              </td>
            </tr>
            <tr data-upin="402910">
              <td className="name">Nick Ramsen</td>
              <td className="zipcode">92037</td>
              <td className="city">La Jolla</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
            <tr data-upin="910291">
              <td className="name">Liz Redfield</td>
              <td className="zipcode">92015</td>
              <td className="city">San Diego</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
            <tr data-upin="202914">
              <td className="name">Javier Garcia</td>
              <td className="zipcode">92015</td>
              <td className="city">San Diego</td>
              <td>
                <button className="button button-outline">
                  Mark as Available
                </button>
              </td>
            </tr>
            <tr data-upin="394840">
              <td className="name">Harry Bone</td>
              <td className="zipcode">92015</td>
              <td className="city">San Diego</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
            <tr data-upin="982170">
              <td className="name">Kevin Lamkin</td>
              <td className="zipcode">92015</td>
              <td className="city">San Diego</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
            <tr data-upin="393920">
              <td className="name">Andrew Stuart</td>
              <td className="zipcode">92037</td>
              <td className="city">La Jolla</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
            <tr data-upin="655942">
              <td className="name">Maggie Willians</td>
              <td className="zipcode">92037</td>
              <td className="city">San Diego</td>
              <td>
                <button className="button button-outline">
                  Mark as Unavailable
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default TableDoctors;
