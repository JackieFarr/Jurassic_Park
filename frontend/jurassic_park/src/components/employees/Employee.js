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
      <img src={props.employee.imageURL} width="300" height="auto"/>

        <h2>Name: {props.employee.name}</h2>

        <img src={require("./foot.png")} height="auto" width="50px" alt="logo"/>

        <h3>Job title: {props.employee.jobTitle} </h3>

      </li>
      </ul>
    </div>

    </React.Fragment>
  );

}

export default Employee;
