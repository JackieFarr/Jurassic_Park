import React, {Component} from 'react';

import Request from '../../helpers/request';
import PaddockForm from '../../components/paddocks/PaddockForm'

class PaddockFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs: [], paddocks:[]};
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/dinosaurs").then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })

    request.get("/api/paddocks").then((data) => {
      this.setState({paddocks:data._embedded.paddocks})
    })
  }

  handlePaddockPost(paddock){
    const request = new Request();
    request.post('/api/paddocks', paddock).then(() => {
      window.location = '/paddocks'
    })
  }

  render(){

    return <PaddockForm
      dinosaurs={this.state.dinosaurs}
      paddocks={this.state.paddocks}
      handlePaddockPost={this.handlePaddockPost}
      />
  }
}

export default PaddockFormContainer;
