import React from "react";

const TableDoctors = (props) => {
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
            <td>John Doe</td>
            <td>92037</td>
            <td>La Jolla</td>
            <td>
              <button className="button button-outline">
                Mark as Available
              </button>
            </td>
          </tr>
          <tr data-upin="402910">
            <td>Nick Ramsen</td>
            <td>92037</td>
            <td>La Jolla</td>
            <td>
              <button className="button button-outline">
                Mark as Unavailable
              </button>
            </td>
          </tr>
          <tr data-upin="910291">
            <td>Liz Redfield</td>
            <td>92015</td>
            <td>San Diego</td>
            <td>
              <button className="button button-outline">
                Mark as Unavailable
              </button>
            </td>
          </tr>
          <tr data-upin="202914">
            <td>Javier Garcia</td>
            <td>92015</td>
            <td>San Diego</td>
            <td>
              <button className="button button-outline">
                Mark as Available
              </button>
            </td>
          </tr>
          <tr data-upin="394840">
            <td>Harry Bone</td>
            <td>92015</td>
            <td>San Diego</td>
            <td>
              <button className="button button-outline">
                Mark as Unavailable
              </button>
            </td>
          </tr>
          <tr data-upin="982170">
            <td>Kevin Lamkin</td>
            <td>92015</td>
            <td>San Diego</td>
            <td>
              <button className="button button-outline">
                Mark as Unavailable
              </button>
            </td>
          </tr>
          <tr data-upin="393920">
            <td>Andrew Stuart</td>
            <td>92037</td>
            <td>La Jolla</td>
            <td>
              <button className="button button-outline">
                Mark as Unavailable
              </button>
            </td>
          </tr>
          <tr data-upin="655942">
            <td>Maggie Willians</td>
            <td>92037</td>
            <td>San Diego</td>
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
};

export default TableDoctors;