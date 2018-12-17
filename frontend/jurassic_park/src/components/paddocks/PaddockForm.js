import React from 'react';

const PaddockForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const paddock = {
        "name": event.target.name.value,
        "capacity": event.target.capacity.value,
        "paddockType": event.target.paddockType.value,
      }
    props.handlePaddockPost(paddock)
  }

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name"/>
            <input type="number" placeholder="capacity" name="capacity"/>
          
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PaddockForm;
