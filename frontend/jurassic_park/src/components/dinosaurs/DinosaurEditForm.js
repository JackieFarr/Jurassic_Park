import React, {Component} from 'react';

class DinosaurEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      species: props.dinosaur.species,
      height: props.dinosaur.height,
      weight: props.dinosaur.weight,
      dinoType: props.dinosaur.dinoType,
      paddock: props.dinosaur._embedded.paddock.name,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const dinosaur = {
        "species": this.state.species,
        "height": this.state.height,
        "weight": this.state.weight,
        "dinoType": this.state.dinoType,
        "dinoTypeString": this.state.dinoTypeString,
        "paddock": this.state.paddock.name
        }
    this.props.handleDinosaurEdit(dinosaur)
  }

render(){
  console.log("this.props.dinos", this.props.dinosaurs);
  console.log("this.props.padds", this.props.paddocks);
     const paddockOptions = this.props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    const dinoTypeOptions = this.props.dinosaurs.map((dinosaur, index) => {
      return <option key={index} value={dinosaur._links.self.href}>{dinosaur.dinoType}</option>
    })


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.species} name="species" onChange={e => this.setState({ species: e.target.value })}/>

        <input type="number" value = {this.state.height} name="height" onChange={e => this.setState({ height: e.target.value })}/>

        <input type="number" value = {this.state.weight} name="weight" onChange={e => this.setState({ weight: e.target.value })}/>

        <select name="dinosaur" onChange={e => this.setState({ dinosaur: e.target.value })}>
        {dinoTypeOptions}
        </select>

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
