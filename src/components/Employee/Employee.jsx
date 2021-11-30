import React from "react";
import "./Employee.scss";

const Employee = (props) => {
  const {employeeName, employeeRole} = props;

  return <section>
    <p className="employee-content">{employeeName}</p>
    <p className="employee-content">{employeeRole}</p>
  </section>
}

export default Employee;