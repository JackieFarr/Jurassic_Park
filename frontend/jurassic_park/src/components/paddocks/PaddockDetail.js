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

    <button onClick={onDelete}>Delete Paddock</button>
    <button onClick={onEdit}>Edit Paddock</button>
    </React.Fragment>
  )
}

export default PaddockDetails;
