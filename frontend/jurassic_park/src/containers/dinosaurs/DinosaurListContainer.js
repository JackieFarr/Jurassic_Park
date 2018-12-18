import React, {Component} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList.js';

import Request from '../../helpers/request.js';

class DinosaurListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs: []}
  }

  componentDidMount(){
    // console.log("this.state", this.state);
    let request = new Request()
    request.get('/api/dinosaurs').then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
      // console.log("data._embedded.dinosaurs", data._embedded.dinosaurs);

    })
  }

  render(){
    // console.log("dino state", this.state.dinosaur);

    return (
     <DinosaurList dinosaurs = {this.state.dinosaurs}
     />
    )
  }
}

export default DinosaurListContainer;
