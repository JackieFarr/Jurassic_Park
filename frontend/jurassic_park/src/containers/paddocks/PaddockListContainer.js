import React, {Component} from 'react';
import PaddockList from '../../components/paddocks/PaddockList.js';

import Request from '../../helpers/request.js';

class PaddockListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('http://localhost:8080/api/paddocks').then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  render(){
    return (
     <PaddockList paddocks = {this.state.paddocks} />
    )
  }
}

export default PaddockListContainer;
