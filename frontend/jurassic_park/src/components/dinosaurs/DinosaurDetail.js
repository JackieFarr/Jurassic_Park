import React  from 'react';
import {Link} from 'react-router-dom';

const DinosaurDetail = (props) => {

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

  const onEdit = () => {
    props.handleEdit(props.dinosaur.id)
  }

  return (
  
    <React.Fragment>
    <p>Weight: {props.dinosaur.weight} pounds</p>
    <p>Height: {props.dinosaur.height} m</p>
    <p>Type: {props.dinosaur.dinoType}</p>
    <p>Paddock: {props.dinosaur._embedded.paddock.name}</p>
    <button onClick={onDelete}>Delete Dinosaur</button>
    <button onClick={onEdit}>Edit Dinosaur</button>
    </React.Fragment>
  )
}

export default DinosaurDetail;
