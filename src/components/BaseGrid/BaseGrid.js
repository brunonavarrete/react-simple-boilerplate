import React from 'react';
import './BaseGrid.css'
import BaseGridCard from './BaseGridCard';

const baseGrid = props =>  {
	let data = props.data.length ?
		props.data.map(item => (
			<BaseGridCard
			 key={ item.id }
			 item={ item } />
		))
	: <h2>No data</h2>
		
	return <div className="BaseGrid">{ data }</div>
}

export default baseGrid