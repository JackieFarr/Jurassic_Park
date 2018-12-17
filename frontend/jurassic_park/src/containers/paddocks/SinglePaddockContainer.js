import React, {Component} from 'react';
import Paddock from '../../components/paddocks/Paddock.js';
import PaddockDetail from '../../components/paddocks/Paddock.js';

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
    const url = 'http://localhost:8080/api/paddocks/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({paddock: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/paddocks/' + id;
    request.delete(url).then(() => {
      window.location = '/paddocks'
    })
  }

  handleEdit(id){
    window.location = '/paddocks/edit/' + this.props.id
  }

  render(){
    if(!this.state.paddock){
      return null;
    }
    return (
      <div className="component">
       <Paddock dinosaur = {this.state.paddock._embedded.dinosaur}
       paddock = {this.state.dinosaur} />
       <PaddockDetail paddock = {this.state.paddock}
       handleDelete = {this.handleDelete}
       handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SinglePaddockContainer;
