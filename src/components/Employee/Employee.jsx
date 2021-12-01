import React from "react";
import "./Employee.scss";

const Employee = (props) => {
  const {employeesArr} = props;

  const employeeCards = employeesArr.map((employee) => {
    return <div className="employee-card" key={employee.id}>
      <p className="employee-content">{employee.name}</p>
      <p className="employee-content">{employee.role}</p>
    </div>
  })

  return <section className="employee-cards">
    {employeeCards}
  </section>
}

export default Employee;