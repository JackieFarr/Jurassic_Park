import React, {Component} from 'react';

import Request from '../../helpers/request';
import PaddockForm from '../../components/paddocks/PaddockForm'

class PaddockFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs: []};
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/dinosaurs").then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })
  }

  handlePaddockPost(paddock){
    const request = new Request();
    request.post('/paddocks', paddock).then(() => {
      window.location = '/paddocks'
    })

  }

  render(){

    return <PaddockForm
      dinosaurs={this.state.dinosaurs}
      handlePaddockPost={this.handlePaddockPost}

      />

  }
}

export default PaddockFormContainer;
