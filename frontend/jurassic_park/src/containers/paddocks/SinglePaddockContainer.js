import React, {Component} from 'react';
import Paddock from '../../components/paddocks/Paddock.js';
import PaddockDetail from '../../components/paddocks/PaddockDetail.js';

import Request from '../../helpers/request.js';

class SinglePaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddock: null}
    this.handleEdit= this.handleEdit.bind(this)
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

  render(){
    console.log("this.state.paddock", this.state.paddock);
    if(!this.state.paddock){
      return null;
    }
    return (
      <div className="component">

      <Paddock dinosaur = {this.state.paddock._embedded.dinosaurs}
      paddock = {this.state.paddock} />

       <PaddockDetail
       paddock = {this.state.paddock}
       handleEdit={this.handleEdit}/>
     </div>
    )
  }
}

export default SinglePaddockContainer;
