import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <table className="table table-bordered">
    <thead>
    <tr><th><h1>Msc Enterprise Software Systems- Modules Table</h1></th></tr>
      <tr>
        
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>DevOps</td>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Enterprise Web Dev</td>
        <td>3</td>
        <td>2</td>
      </tr>
    </tbody >
  </table>
  );
};

export default Demo;
