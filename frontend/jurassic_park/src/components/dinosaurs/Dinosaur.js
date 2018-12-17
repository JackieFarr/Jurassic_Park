import React  from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = (props) => {

  if(!props.dinosaur && !props.paddock){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/dinosaurs/" + props.dinosaur.id} className="species">
          {props.dinosaur.species}
        </Link>
      <p>Weight: {props.dinosaur.weight}</p>
      <p>height: {props.dinosaur.height}</p>
      <p>Type: {props.dinosaur.dinoType}</p>
      <p>Paddock: {props.dinosaur.paddock}</p>

    </React.Fragment>
  )
}

export default Dinosaur;
