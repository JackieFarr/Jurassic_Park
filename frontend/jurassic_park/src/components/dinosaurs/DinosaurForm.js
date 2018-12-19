import React from 'react';

const DinosaurForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();

    const dinosaur = {
        "name": event.target.name.value,
        "speciesType": event.target.speciesType.value,
        "height": event.target.height.value,
        "weight": event.target.weight.value,
        "dinoType": event.target.dinoType.value,
        "paddock": [...event.target.paddock.options].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
    props.handleDinosaurPost(dinosaur)
  }
       const paddockOptions = props.paddocks.map((paddock, index) => {
        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
      })

      return (
        <div>
        <h1 className="page-title"> Add a new dinosaur to the park</h1>
          <form onSubmit={handleSubmit} align="center">
            <input type="text" placeholder="Name" name="name"/>

            <select name="speciesType">
              <option value="TYRANNOSAURUS_REX">Tyrannosaurus Rex</option>
              <option value="DIPLODOCUS">Diplodocus</option>
              <option value="BRACHIOSAURUS">Brachiosaurus</option>
              <option value="STEGOSAURUS">Stegosaurus</option>
              <option value="TRICERATOPS">Triceratops</option>
              <option value="MOSASAURUS">Mosasaurus</option>
              <option value="PTERANODON">Pteranodon</option>
              <option value="GALLIMIMUS">Gallimimus</option>
              <option value="SARCOSUCHUS">Sarcosuchus</option>
              <option value="VELOCIRAPTOR">Velociraptor</option>
              <option value="PTERODACTYL">Pterodactyl</option>
            </select>

              <input type="number" placeholder="Height" name="height"/>
              <input type="number" placeholder="Weight" name="weight"/>

            <select name="dinoType">
              <option value="CARNIVORE">Carnivore</option>
              <option value="HERBIVORE">Herbivore</option>
              <option value="AQUATIC">Aquatic</option>
              <option value="FLYING">Flying</option>
              </select>

            <select name="paddock" >
              {paddockOptions}
            </select>

            <button className="save-button" type="submit">Save</button>
          </form>
        </div>
    )
}


export default DinosaurForm;
