import React from 'react';

import './App.css';
import AppHeader from '../components/AppHeader/AppHeader'
import ProductGrid from './ProductGrid/ProductGrid'

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
		      <ProductGrid products={ this.props.products }/>
		    </div>
		);
	}
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchItems: () => dispatch(actionCreator.onFetchItems()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)