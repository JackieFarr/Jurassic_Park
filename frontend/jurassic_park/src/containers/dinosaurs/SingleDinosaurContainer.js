import React, {Component} from 'react';
import Dinosaur from '../../components/dinosaurs/Dinosaur.js';
import DinosaurDetail from '../../components/dinosaurs/DinosaurDetail.js';

import Request from '../../helpers/request.js';

class SingleDinosaurContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaur: null}
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/dinosaurs/' + this.props.id + '?projection=embedPaddock';
    request.get(url).then((data) => {
      this.setState({dinosaur: data})
    })
  }

  handleEdit(id){
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
       handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleDinosaurContainer;
