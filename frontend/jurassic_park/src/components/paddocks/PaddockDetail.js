import React  from 'react';

const PaddockDetail = (props) => { console.log("paddock detail props",props.paddock);

  const onEdit = () => {
    props.handleEdit(props.paddock.id)
  }


  const getDinosaurs = () => {
    if(!props.dinosaurs){
      return null;
    }
    const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
      return <li key = {index}>{dinosaur.name}</li>
    })
  }

  return (
    <React.Fragment>
    <div className="detail-list">

    <h1>{props.paddock.name} </h1>
    <p>Capacity: {props.paddock.capacity} dinosaurs</p>
    <p>Paddock Type: {props.paddock.paddockType}</p>
    <p>Dinosaurs:</p>
    <ul>
      {getDinosaurs()}
    </ul>

    <button className="edit-button" onClick={onEdit}>Edit Paddock</button>
    </div>
    </React.Fragment>
  )
}

export default PaddockDetail;
