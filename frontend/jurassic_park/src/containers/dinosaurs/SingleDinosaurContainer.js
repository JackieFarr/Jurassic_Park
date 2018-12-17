import React, {Component} from 'react';
import Dinosaur from '../../components/dinosaurs/Dinosaur.js';
import DinosaurDetail from '../../components/dinosaurs/DinosaurDetail.js';

import Request from '../../helpers/request.js';

class SingleDinosaurContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaur: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    console.log("this props id", this.props.id);
    let request = new Request()
    const url = 'http://localhost:8080/api/dinosaurs/' + this.props.id + '?projection=embedPaddock';
    request.get(url).then((data) => {
      this.setState({dinosaur: data})
    })
  }

  handleDelete(id){

    const request = new Request();
    const url = '/dinosaurs/' + id;
    request.delete(url).then(() => {
      window.location = '/dinosaurs'
    })
  }

  handleEdit(id){
    console.log("edit this props id", id);

    window.location = '/dinosaurs/edit/' + this.props.id
  }


  render(){
    if(!this.state.dinosaur){
      return null;
    }
    return (
      <div className="component">
       <Dinosaur paddock = {this.state.dinosaur._embedded.paddock}
       dinosaur = {this.state.dinosaur} />
       <DinosaurDetail dinosaur = {this.state.dinosaur}
       handleDelete = {this.handleDelete}
       handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleDinosaurContainer;
