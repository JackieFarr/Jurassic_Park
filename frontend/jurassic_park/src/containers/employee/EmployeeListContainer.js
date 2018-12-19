import React, {Component} from 'react';
  import EmployeeList from '../../components/employees/EmployeeList.js';
import Request from '../../helpers/request.js';

class EmployeeListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {employees: []}
  }

  componentDidMount() {
    let request = new Request();
    request.get('/api/employees')
      .then((data) => {
        this.setState({employees: data._embedded.employees})
      });
  }

  render() {
    return(
      <EmployeeList employees = {this.state.employees} />
    );
  }
}

export default EmployeeListContainer;
