import React from 'react';

const PaddockForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const paddock = {
        "name": event.target.name.value,
        "capacity": event.target.capacity.value,
        "paddockType": event.target.paddockType,
        "dinosaurs": event.target.dinosaurs,
      }
    props.handlePaddockPost(paddock)
  }

 const paddockTypeOptions = props.paddocks.map((paddock, index) => {
   return <option key={index} value={paddock._links.self.href}>{paddock.paddockType}</option>
 })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name"/>
            <input type="number" placeholder="capacity" name="capacity"/>

            <select name="paddock">
            {paddockTypeOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PaddockForm;
