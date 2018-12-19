import React from 'react';
import Employee from './Employee.js';
import {Link} from 'react-router-dom';


const EmployeeList = (props) => {

  const employees = props.employees.map((employee, index) => {
    return(
      <li key={employee.id} className="component-item">
      <div className = "component">
        <Employee employee={employee}/>
        </div>
      </li>
    );
  });

  return(
    <React.Fragment>

    <button className="add-button"><Link to="/employees/new">Add staff member </Link></button>
    <ul className="employee-list">
      {employees}
    </ul>
    </React.Fragment>

  );

}

export default EmployeeList;
