import React, {Component} from 'react';
import Paddock from '../../components/paddocks/Paddock.js';
import PaddockDetails from '../../components/paddocks/Paddock.js';

import Request from '../../helpers/request.js';

class SinglePaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddock: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/paddocks/' + this.props.id + '?projection=embedDinosaurs';
    request.get(url).then((data) => {
      this.setState({paddock: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/paddocks/' + id;
    request.delete(url).then(() => {
      window.location = '/paddocks'
    })
  }

  handleEdit(id){
    window.location = '/paddocks/edit/' + id
  }


  render(){
    if(!this.state.paddock){
      return null;
    }
    return (
      <div className="component">
       <Paddock dinosaur = {this.state.paddock._embedded.dinosaur}
       paddock = {this.state.dinodaur} />
       <PaddockDetails paddock = {this.state.paddock}
       handleDelete = {this.handleDelete}
       handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SinglePaddockContainer;
