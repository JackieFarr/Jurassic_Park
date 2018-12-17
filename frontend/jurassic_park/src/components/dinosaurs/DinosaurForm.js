import React from 'react';

const DinosaurForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const dinosaur = {
        "species": event.target.species.value,
        "height": event.target.height.value,
        "weight": event.target.weight.value,
        "paddock": event.target.paddock.name.value,

      }
    props.handleDinosaurPost(dinosaur)

  }

    const paddockOptions = props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Species" name="species"/>
            <input type="text" placeholder="Height" name="height"/>
            <input type="number" placeholder="Weight" name="weight"/>
            <select name="paddock">
              {paddockOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DinosaurForm;
