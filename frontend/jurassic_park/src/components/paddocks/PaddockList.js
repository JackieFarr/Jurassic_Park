import React from 'react';
import Paddock from './Paddock.js';


const PaddockList = (props) => {
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
		<button>Add Paddock</button>

		<ul className="component-list">
	    {paddocks}
	  </ul>
		</React.Fragment>
	)
}
 export default PaddockList;
