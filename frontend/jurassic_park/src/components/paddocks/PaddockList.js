import React from 'react';
import Paddock from './Paddock.js';
import {Link} from 'react-router-dom';

const PaddockList = (props) => { console.log("paddocklist props", props.paddocks);
	const paddocks = props.paddocks.map((paddock) => {
		 	return (
				<li key={paddock.id} className="component-item">
					<div className = "component">
				<Paddock dinosaur={paddock.dinosaur} paddock={paddock} />
			</div>
			</li>
		)
		})

	return (
		<React.Fragment>
		<button className="add-button"><Link to="/paddocks/new">Add Paddock</Link></button>

		<ul className="component-list">
	    {paddocks}
	  </ul>
		</React.Fragment>
	)
}
 export default PaddockList;
