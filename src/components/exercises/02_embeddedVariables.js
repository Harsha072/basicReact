import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const module = [{
    name: "Devops",
    lectures: 4,
    practicles: 3
  },
  {
    name: "Enterprise",
    lectures: 6,
    practicles: 2
  }
    , {
      name: "Agile",
    lectures: 3,
    practicles: 2
  },
            {
    name: "Mobile",
    lectures: 4,
    practicles: 3
  }]
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
          <td>{module[1].name}</td>
          <td>{module[1].lectures}</td>
          <td>{module[1].practicles}</td>
        </tr>
        <tr>
          <td>{module[1].name}</td>
          <td>{module[1].lectures}</td>
          <td>{module[1].practicles}</td>
        </tr>
      </tbody >
    </table>
  );
};

export default Demo;
