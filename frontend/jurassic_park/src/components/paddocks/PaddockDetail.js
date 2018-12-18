import React  from 'react';

const PaddockDetail = (props) => { console.log("paddock detail props",props);

  const onEdit = () => {
    props.handleEdit(props.paddock.id)
  }

  return (
    <React.Fragment>
    <div className="detail-list">

    <h1>{props.paddock.name} </h1>
    <p>Capacity: {props.paddock.capacity}</p>
    <p>PaddockType: {props.paddock.paddockType}</p>
    <p>Dinosaurs: {props.paddock._embedded.dinosaurs.name}</p>

    <button className="edit-button" onClick={onEdit}>Edit Paddock</button>
    </div>
    </React.Fragment>
  )
}

export default PaddockDetail;
