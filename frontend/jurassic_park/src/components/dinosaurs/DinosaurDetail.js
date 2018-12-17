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
    <button onClick={onDelete}>Delete Dinosaur</button>
    <button onClick={onEdit}>Edit Dinosaur</button>
    </React.Fragment>
  )
}

export default DinosaurDetail;
