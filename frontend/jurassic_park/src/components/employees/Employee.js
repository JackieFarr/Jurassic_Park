import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Employee = (props) => {

  if(!props.employee) {
    return null;
  }

  // const employee = props.employee.map((employee) => {
  //   return(
  //     <li key={employee.id}</li>
  //   );
  // });

  return(
    <React.Fragment>
    <div className="employees">
    <ul>
      <li>
      <img src={props.employee.imageURL} width="300" height="auto" list-style-type="none"/>
        <p list-style-type="none">
        Name: {props.employee.name}
        <br></br>
        Job title: {props.employee.jobTitle}</p>

      </li>
      </ul>
    </div>

    </React.Fragment>
  );

}

export default Employee;
