import React from 'react';

import './App.css';
import AppHeader from '../components/AppHeader/AppHeader'
import BaseGrid from '../components/BaseGrid/BaseGrid'
import BaseForm from './BaseForm/BaseForm'

import * as actionCreator from '../store/actions/actions'

import { connect } from 'react-redux'

class App extends React.Component {
	componentDidMount(){
		this.props.onFetchItems()
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
        onFetchItems: () => dispatch(actionCreator.onFetchItems()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)