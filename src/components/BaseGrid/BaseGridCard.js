import React from 'react';

const BaseGridCard = (props) => {
  return (
    <div 
	 className="BaseGrid__card"
	 key={ props.item.id }>
	 	<div className="BaseGrid__cardInner">
	 		{ props.item.name }
	 	</div>
	</div>
  )
}

export default BaseGridCard;