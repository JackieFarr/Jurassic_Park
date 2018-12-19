import React from 'react';
import Employee from './Employee.js';
import {Link} from 'react-router-dom';


const EmployeeList = (props) => {

  const employees = props.employees.map((employee, index) => {
    return(
      <p key={employee.id} className="component-item" list-style-type="none">
      <div className = "component">
        <Employee employee={employee}/>
        </div>
      </p>
    );
  });

  return(
    <React.Fragment>

    <button className="add-button"><Link to="/employees/new">Add staff member </Link></button>
    <p className="employee-list" list-style-type="none">
      {employees}
    </p>
    </React.Fragment>

  );

}

export default EmployeeList;
