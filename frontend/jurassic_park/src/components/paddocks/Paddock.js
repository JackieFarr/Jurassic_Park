import React  from 'react';
import {Link} from 'react-router-dom';

const Paddock = (props) => {

  if(!props.paddock && !props.dinosaur){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/paddocks/" + props.paddock.id} className="name">
          {props.paddock.name}
        </Link>
      <p>Capacity: {props.paddock.capacity}</p>
      <p>PaddockType: {props.paddock.paddockType}</p>
      <p>Dinosaurs: {props.paddock.dinosaurs}</p>

    </React.Fragment>
  )
}

export default Paddock;
