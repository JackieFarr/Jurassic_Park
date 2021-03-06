import React  from 'react';
import {Link} from 'react-router-dom';

const Paddock = (props) => {
  if(!props.dinosaur && !props.paddock ){
    return null;
  }


  return (
    <React.Fragment>
        <Link to = {"/paddocks/" + props.paddock.id} className="name">
          {props.paddock.name}
        </Link>
    </React.Fragment>
  )
}

export default Paddock;
