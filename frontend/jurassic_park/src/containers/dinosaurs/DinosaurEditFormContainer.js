import React, {Component} from 'react';
import Request from '../../helpers/request';
import DinosaurEditForm from '../../components/dinosaurs/DinosaurEditForm'

class DinosaurEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: null, dinosaur: null, dinosaurs: []};
    this.handleDinosaurEdit = this.handleDinosaurEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("http://localhost:8080/api/paddocks").then((paddocks) => {
      this.setState({paddocks: paddocks._embedded.paddocks})
    });
    request.get("http://localhost:8080/api/dinosaurs/" + this.props.id).then((dinosaur) => {
      this.setState({dinosaur: dinosaur})
    });

    request.get("http://localhost:8080/api/dinosaurs").then((dinosaurs) => {
      this.setState({dinosaurs: dinosaurs._embedded.dinosaurs})
    });
  }

  handleDinosaurEdit(dinosaur){
    const request = new Request();
    request.patch('http://localhost:8080/api/dinosaurs/' + this.props.id, dinosaur).then(() => {
      window.location = '/dinosaurs/' + this.props.id
    })
  }

  render(){
    if(!this.state.paddocks || !this.state.dinosaur){
      return <h1>loading</h1>;
    }
    return <DinosaurEditForm
    dinosaurs = {this.state.dinosaurs}
    paddocks = {this.state.paddocks}
    dinosaur={this.state.dinosaur}
    handleDinosaurEdit= {this.handleDinosaurEdit}
    />

  }
}

export default DinosaurEditFormContainer;
