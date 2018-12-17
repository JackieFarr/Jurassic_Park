import React, {Component} from 'react';

import Request from '../../helpers/request';
import DinosaurForm from '../../components/dinosaurs/DinosaurForm'

class DinosaurFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: [], dinosaurs: []};
    this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("http://localhost:8080/api/paddocks").then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('http://localhost:8080/api/dinosaurs', dinosaur).then(() => {
      window.location = '/dinosaurs'
    })
  }

  render(){
    return <DinosaurForm
      dinosaurs={this.state.dinosaurs}
      paddocks={this.state.paddocks}
      handleDinosaurPost={this.handleDinosaurPost}

      />

  }
}

export default DinosaurFormContainer;
