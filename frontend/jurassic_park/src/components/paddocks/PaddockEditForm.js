import React, {Component} from 'react';

class PaddockEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.paddock.name,
      capacity: props.paddock.capacity,
      paddockType: props.paddock.paddockType,
      // dinosaurs: props.paddock._embedded.dinosaurs
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const paddock = {
        "name": this.state.name,
        "capacity": this.state.capacity,
        "paddockType": this.state.paddockType,
        // "dinosaurs": this.state.dinosaurs
        }
    this.props.handlePaddockEdit(paddock)
  }


render(){

  return (
    <div>
    <h1 className="page-title"> Update paddock details</h1>

      <form onSubmit={this.handleSubmit} align="center">
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>

        <input type="number" value = {this.state.capacity} name="capacity" onChange={e => this.setState({ capacity: e.target.value })}/>

        <select name="paddockType" defaultValue={this.paddockType} onChange={e => this.setState({ paddockType: e.target.value })}>
        <option value="LAND">Land</option>
        <option value="LAKE">Lake</option>
        <option value="BIRDCAGE">Birdcage</option>
        </select>

        <button className="save-button" type="submit">Save</button>
      </form>
    </div>

  )
}
}

  export default PaddockEditForm;
