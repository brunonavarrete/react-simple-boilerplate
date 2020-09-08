import React from 'react';
import * as actionCreator from '../../store/actions/actions'
import { connect } from 'react-redux'

const BaseGridCard = (props) => {
  return (
    <div 
	 className="BaseGrid__card"
	 key={ props.item.id }>
	 	<div className="BaseGrid__cardInner">
	 		{ props.item.name }
	 		<small style={ {
	 			display: 'block',
	 			color: 'red',
	 			cursor: 'pointer'
	 		} }
	 		onClick={ () => {props.onDeleteItem(props.item.id)} }>[delete]</small>
	 	</div>
	</div>
  )
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteItem: id => dispatch(actionCreator.onDeleteItem(id))
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseGridCard);