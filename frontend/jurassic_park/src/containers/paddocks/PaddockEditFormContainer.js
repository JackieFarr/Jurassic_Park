import React, {Component} from 'react';
import Request from '../../helpers/request';
import PaddockEditForm from '../../components/paddocks/PaddockEditForm';

class PaddockEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: null, dinosaur: null, paddock: null};
    this.handlePaddockEdit = this.handlePaddockEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/paddocks/" + this.props.id).then((paddock) => {
      this.setState({paddock: paddock})
    });
  }

  handlePaddockEdit(paddock){
    const request = new Request();
    request.patch('/api/paddocks/' + this.props.id, paddock).then(() => {
      window.location = '/paddocks/' + this.props.id
    })
  }

  render(){
    if(!this.state.dinosaurs || !this.state.paddock){
      return <h1>loading</h1>;
    }
    return <PaddockEditForm
    dinosaurs = {this.state.dinosaurs}
    paddock={this.state.paddock}
    handlePaddockEdit= {this.handlePaddockEdit}
    />

  }
}

export default PaddockEditFormContainer;
