import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../Images/trash.svg";
import editIcon from "../Images/pencil-fill.svg";
import newIcon from "../Images/plus-circle.svg";

function Table({ list, cols, controler }) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <Link to={`/${controler}/new`} className="btn btn-success">
                New
                <img src={newIcon} alt="New" />
              </Link>
            </th>
            {cols.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((value, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link
                    to={`/${controler}/edit/${Object.values(value)[0]}`}
                    className="btn btn-primary "
                  >
                    Edit
                    <img src={editIcon} alt="Edit" />
                  </Link>
                  <Link
                    to={`/${controler}/delete/${Object.values(value)[0]}`}
                    className="btn btn-danger"
                  >
                    Delete
                    <img src={deleteIcon} alt="Delete" />
                  </Link>
                </td>
                {Object.values(value).map((value2, index2) => {
                  return <td key={index2}>{value2}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            {cols.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
