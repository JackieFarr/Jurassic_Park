import React, {Component} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList.js';

import Request from '../../helpers/request.js';

class DinosaurListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('http://localhost:8080/api/dinosaurs').then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })
  }

  render(){
    return (
     <DinosaurList dinosaurs = {this.state.dinosaurs} />
    )
  }
}

export default DinosaurListContainer;
