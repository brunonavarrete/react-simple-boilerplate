import React from 'react';
import './BaseForm.css'

import * as actionCreator from '../../store/actions/actions'
import { connect } from 'react-redux'

class BaseForm extends React.Component {

	state = {
		newItem: ''
	}

	changeNameHandler(e) {
		this.setState({ newItem: e.target.value })
	}

	sendItemHandler(e){
		e.preventDefault()
		this.props.onAddItem(this.state.newItem)
		this.setState({ newItem: '' })
	}

	render() {
		return (
			<form className="BaseForm" onSubmit={ e => this.sendItemHandler(e) }>
		    	<input value={ this.state.newItem } onChange={ e => this.changeNameHandler(e) } />
		    	<button>Submit</button>
		    </form>
		);
	}
}

const mapStateToProps = state => {
    return {
		newItem: state.newItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: item => dispatch(actionCreator.onAddItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseForm);