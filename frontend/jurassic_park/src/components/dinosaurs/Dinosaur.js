import React  from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = (props) => {
  if(!props.dinosaur && !props.paddock){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/dinosaurs/" + props.dinosaur.id} className="name">
          {props.dinosaur.name}
        </Link>
    </React.Fragment>
  )
}

export default Dinosaur;
