import React  from 'react';

const DinosaurDetail = (props) => {
  console.log("dino detail props",props);


  const onEdit = () => {
    props.handleEdit(props.dinosaur.id)
  }

  return (

    <React.Fragment>
    <div className="detail-list" align="left">
    <p>Name: {props.dinosaur.name}</p>
    <p>Species: {props.dinosaur.speciesType}</p>
    <p>Weight: {props.dinosaur.weight} pounds</p>
    <p>Height: {props.dinosaur.height} m</p>
    <p>Type: {props.dinosaur.dinoType}</p>
    <p>Paddock: {props.dinosaur._embedded.paddock.name}</p>
    <button className="edit-button" onClick={onEdit}>Edit Dinosaur</button>
    </div>
    </React.Fragment>
  )
}

export default DinosaurDetail;
