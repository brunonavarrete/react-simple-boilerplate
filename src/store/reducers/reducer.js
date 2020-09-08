const initialState = {
	baseData: [],
	newItem: ''
}

const reducer = (state = initialState, action) => {

	const newState = {...state}

	switch(action.type) {
		case 'ADD_ITEM':
			return {
				...newState,
				baseData: [...newState.baseData, action.item]
			};
			break;
		case 'FETCH_ITEMS':
			return {
				...newState,
				baseData: action.items
			}
			break;
		case 'DELETE_ITEM':
			let arr = [...newState.baseData]

			return {
				...newState,
				baseData: arr.filter(i => i.id !== action.id)
			}
			break;
	}


	return newState
}

export default reducer