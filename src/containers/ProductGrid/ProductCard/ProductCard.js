import React from 'react';
import { connect } from 'react-redux'
import * as actionCreator from '../../../store/actions/actions'

const ProductCard = (props) => {
  return (
    <div style={ {
    	margin: '0 0 10px',
    	flex: '0 0 30%',
    	width: '30%',
    } }>
    	<div style={ {
    		border: 'solid 1px #eee',
    		padding: 20,
    	} }>
    		<h3>
    			{ props.name } 
    			<span
    			style={ {
    				color: 'red',
    				float: 'right',
    				fontSize: 10
    			} }
    			onClick={ () => {props.onDeleteItem(props.id)} } >
    			[Delete item]</span>
    		</h3>
    		<div>
    			<p>{ props.description }</p>
    			<small style={{
    				display: 'inline-block',
    				background: 'teal',
    				color: 'white',
    				padding: 5,
    				borderRadius: 3
    			}}>${ props.price }.00</small>
    		</div>
    	</div>
    </div>
  )
}

const mapStateToProps = () => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteItem: id => dispatch(actionCreator.onDeleteItem(id)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);