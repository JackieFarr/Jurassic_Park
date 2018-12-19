import React, {Component} from 'react';
import Request from '../../helpers/request';
import DinosaurForm from '../../components/dinosaurs/DinosaurForm'

class DinosaurFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: [], dinosaurs: [], paddock: []};
    this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/paddocks").then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })

    request.get("/api/dinosaurs").then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })

    request.get("/api/paddocks").then((data) => {
      this.setState({paddock: data._embedded.paddocks})
    })
  }

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur).then(() => {
      // window.location = '/dinosaurs'

    })
  }

  render(){
    return <DinosaurForm
      dinosaurs={this.state.dinosaurs}
      paddocks={this.state.paddocks}
      paddock={this.state.paddock}
      handleDinosaurPost={this.handleDinosaurPost}

      />

  }
}

export default DinosaurFormContainer;
