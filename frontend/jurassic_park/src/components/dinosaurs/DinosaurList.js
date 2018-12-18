import React from 'react';
import Dinosaur from './Dinosaur.js';
import {Link} from 'react-router-dom';

const DinosaurList = (props) => {
	const dinosaurs = props.dinosaurs.map((dinosaur) => {
		 	return (
				<li key={dinosaur.id} className="component-item">
					<div className = "component">
				<Dinosaur paddock ={dinosaur.paddock} dinosaur={dinosaur}/>
			</div>
			</li>
		)
		})

	return (
		<React.Fragment>
		<button><Link to="/dinosaurs/new">Add Dinosaur</Link></button>

		<ul className="component-list">
	    {dinosaurs}
	  </ul>
		</React.Fragment>
	)
}
 export default DinosaurList;
