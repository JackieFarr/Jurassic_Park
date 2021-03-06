import React from 'react';

const PaddockForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const paddock = {
        "name": event.target.name.value,
        "capacity": event.target.capacity.value,
        "paddockType": event.target.paddockType.value,
        // "dinosaurs": event.target.dinosaurs,
      }
    props.handlePaddockPost(paddock)
  }

 // const paddockTypeOptions = props.paddocks.map((paddock, index) => {
 //   return <option key={index} value={paddock._links.self.href}>{paddock.paddockType}</option>
 // })

      return (
        <div>
        <h1 className="page-title"> Add a new paddock to the park</h1>
          <form onSubmit={handleSubmit} align="center">
            <input type="text" placeholder="name" name="name"/>
            <input type="number" placeholder="capacity" name="capacity"/>
            <select name="paddockType">
            <option value="LAND">Land</option>
            <option value="LAKE">Lake</option>
            <option value="BIRDCAGE">Birdcage</option>
            </select>
            <button className="save-button" type="submit">Save</button>
          </form>
        </div>
    )


}

export default PaddockForm;
