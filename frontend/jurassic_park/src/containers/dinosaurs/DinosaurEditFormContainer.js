import React, {Component} from 'react';
import Request from '../../helpers/request';
import DinosaurEditForm from '../../components/dinosaurs/DinosaurEditForm'

class DinosaurEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: null, dinosaur: null};
    this.handleDinosaurEdit = this.handleDinosaurEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/paddocks").then((paddocks) => {
      this.setState({paddocks: paddocks._embedded.paddocks})
    });
    request.get("/api/dinosaurs/" + this.props.id + "?projection=embedPaddock").then((dinosaur) => {
      this.setState({dinosaur: dinosaur})
    });
  }

  handlePirateEdit(dinosaur){
    const request = new Request();
    request.patch('/api/dinosaurs/' + this.props.id, dinosaur).then(() => {
      window.location = '/dinosaurs/' + this.props.id
    })
  }

  render(){
    if(!this.state.paddocks || !this.state.dinosaur){
      return <h1>loading</h1>;
    }
    return <DinosaurEditForm
    paddocks = {this.state.paddocks}
    dinosaur={this.state.dinosaur}
    handleDinosaurEdit= {this.handleDinosaurEdit}
    />

  }
}

export default DinosaurEditFormContainer;
