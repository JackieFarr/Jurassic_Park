import React  from 'react';
import {Link} from 'react-router-dom';

const PaddockDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.paddock.id);
  }

  const onEdit = () => {
    props.handleEdit(props.paddock.id)
  }

  return (
    <React.Fragment>
    <h1> {props.paddock.capacity} </h1>
    <p>Capacity: {props.paddock.capacity}</p>
    <p>PaddockType: {props.paddock.paddockType}</p>

    <button onClick={onDelete}>Delete Paddock</button>
    <button onClick={onEdit}>Edit Paddock</button>
    </React.Fragment>
  )
}

export default PaddockDetails;
