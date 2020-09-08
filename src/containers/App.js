import React from 'react';

import './App.css';
import AppHeader from '../components/AppHeader/AppHeader'
import BaseGrid from '../components/BaseGrid/BaseGrid'
import BaseForm from './BaseForm/BaseForm'

import * as actionCreator from '../store/actions/actions'

import { connect } from 'react-redux'

class App extends React.Component {
	componentDidMount(){
		this.props.fetchItems()
	}
	render() {
		return (
			<div>
		      <AppHeader />
		      <BaseGrid data={ this.props.baseData } />
		      <BaseForm />
		    </div>
		);
	}
}
/*<BaseGrid data={ this.props.baseData } />*/

const mapStateToProps = state => {
    return {
        baseData: state.baseData,
        newItem: state.newItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(actionCreator.fetchItems()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)