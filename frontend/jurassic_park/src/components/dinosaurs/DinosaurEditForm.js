import React, {Component} from 'react';

class DinosaurEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      species: props.dinosaur.species,
      height: props.dinosaur.height,
      weight: props.dinosaur.weight,
      paddock: props.dinosaur._embedded.paddock.name
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    const dinosaur = {
        "species": this.state.species,
        "height": this.state.height,
        "weight": this.state.weight,
        "paddock": this.state.paddock.name
        }
    this.props.handleDinosaurEdit(dinosaur)
  }


render(){
  console.log(this.props.dinosaur);
     const paddockOptions = this.props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.species} name="species" onChange={e => this.setState({ firstName: e.target.value })}/>

        <input type="number" value = {this.state.height} name="height" onChange={e => this.setState({ lastName: e.target.value })}/>

        <input type="number" value = {this.state.weight} name="weight" onChange={e => this.setState({ age: e.target.value })}/>

        <select name="paddock" onChange={e => this.setState({ paddock: e.target.value })}>
          {paddockOptions}
        </select>

        <button type="submit">Save</button>
      </form>
    </div>

  )
}
}

  export default DinosaurEditForm;
