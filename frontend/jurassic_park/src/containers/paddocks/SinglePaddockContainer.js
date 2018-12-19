import React, {Component} from 'react';
// import Paddock from '../../components/paddocks/Paddock.js';
import PaddockDetail from '../../components/paddocks/PaddockDetail.js';

import Request from '../../helpers/request.js';

class SinglePaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddock: null}
    this.handleEdit= this.handleEdit.bind(this)
    this.getDinosaursInPaddock = this.getDinosaursInPaddock.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/paddocks/' + this.props.id + '?projection=embedDinosaur';
    request.get(url).then((data) => {
      this.setState({paddock: data});
    })
  }

  handleEdit(id){
    window.location = '/paddocks/edit/' + this.props.id
  }

  getDinosaursInPaddock() {
    let dinosaurs = null;
    if (this.state.paddock._embedded) {
      dinosaurs = this.state.paddock._embedded.dinosaurs
    }
    return dinosaurs
  }

  render(){
    if(!this.state.paddock && !this.state.dinosaurs){
      return null;
    }
    return (
      <div className="component">

       <PaddockDetail
       paddock = {this.state.paddock}
       handleEdit={this.handleEdit}
       dinosaurs={this.getDinosaursInPaddock()}
       />
     </div>
    )
  }
}

export default SinglePaddockContainer;
