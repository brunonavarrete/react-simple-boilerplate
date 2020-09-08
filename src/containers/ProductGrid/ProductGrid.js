import React from 'react';
import ProductCard from './ProductCard/ProductCard'

const productGrid = props => {
	let products = null
	products = props.products.length ?
	props.products.map(p => (
		<ProductCard 
		key={ p.id } 
		id={ p.id } 
		name={ p.name }
		description={ p.description }
		price={ p.price } />
	)) : <h2>nodata</h2>

	return (
		<div style={ {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			width: '100%',
			maxWidth: 'calc(100vw - 80px)',
			margin: '30px auto'
		} }>
			{ products }
		</div>
	);
}

export default productGrid