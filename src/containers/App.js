import React from 'react';

import './App.css';
import AppHeader from '../components/AppHeader/AppHeader'
import BaseGrid from '../components/BaseGrid/BaseGrid'
import BaseForm from '../components/BaseForm/BaseForm'

import { connect } from 'react-redux'

class App extends React.Component {
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

const mapStateToProps = state => {
    return {
        baseData: state.baseData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchPlayers: () => dispatch(actionCreator.fetchPlayers()),
        // //setPlayers: () => dispatch({type: 'SET_PLAYERS'}),
        // onAddition: (player) => dispatch(actionCreator.onAddition(player)),
        // deletePlayer: (id) => dispatch(actionCreator.deletePlayer(id)),
        // onAnswer: (id, correct) => dispatch({type: 'ON_ANSWER', id:id, correct:correct})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)