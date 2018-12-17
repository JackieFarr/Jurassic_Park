import React, {Component} from 'react';

class PaddockEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.paddock.name,
      capacity: props.paddock.capacity,
      paddockType: props.paddock.paddockType,
      dinosaurs: props.paddock._embedded.dinosaur._links.self.href.replace("{?projection}", "")
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    const paddock = {
        "name": this.state.name,
        "capacity": this.state.capacity,
        "paddockType": this.state.paddockType,
        "dinosaurs": this.state.dinosaurs
        }
    this.props.handlePaddockEdit(paddock)
  }


render(){

     const dinosaurOptions = this.props.dinosaurs.map((dinosaur, index) => {
      return <option key={index} value={dinosaur._links.self.href}>{dinosaur.species}</option>
    })


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <input type="number" value = {this.state.capacity} name="capacity" onChange={e => this.setState({ capacity: e.target.value })}/>
        <select name="text" onChange={e => this.setState({ paddockType: e.target.value })}>
          {dinosaurOptions}
        </select>

        <button type="submit">Save</button>
      </form>
    </div>

  )
}
}

  export default PaddockEditForm;
