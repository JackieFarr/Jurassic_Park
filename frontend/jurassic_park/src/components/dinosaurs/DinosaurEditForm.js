import React, {Component} from 'react';

class DinosaurEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.dinosaur.name,
      speciesType: props.dinosaur.speciesType,
      height: props.dinosaur.height,
      weight: props.dinosaur.weight,
      dinoType: props.dinosaur.dinoType,
      paddock: props.dinosaur._embedded.paddock,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const dinosaur = {
        "name": this.state.name,
        "speciesType": this.state.speciesType,
        "height": this.state.height,
        "weight": this.state.weight,
        "dinoType": this.state.dinoType,
        "paddock": this.state.paddock,
        }
    this.props.handleDinosaurEdit(dinosaur)
  }

render(){
     const paddockOptions = this.props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    const dinoTypeOptions = this.props.dinosaurs.map((dinosaur, index) => {
      return <option key={index} value={dinosaur._links.self.href}>{dinosaur.dinoType}</option>
    })

    const speciesOptions = this.props.dinosaurs.map((dinosaur, index) => {
      return <option key={index} value={dinosaur._links.self.href}>{dinosaur.speciesType}</option>
    })

  return (
    <div>
      <form onSubmit={this.handleSubmit}>

      <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>

      <select name="speciesType" onChange={e => this.setState({ dinosaur: e.target.value })}>
      {speciesOptions}
      </select>

        <input type="number" value = {this.state.height} name="height" onChange={e => this.setState({ height: e.target.value })}/>

        <input type="number" value = {this.state.weight} name="weight" onChange={e => this.setState({ weight: e.target.value })}/>

        <select name="dinoType" onChange={e => this.setState({ dinosaur: e.target.value })}>
        <option value="CARNIVORE">Carnivore</option>
        <option value="HERBIVORE">Herbivore</option>
        <option value="AQUATIC">Aquatic</option>
        <option value="FLYING">Flying</option>
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
