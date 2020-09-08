const initialState = {
	baseData: [],
	newItem: ''
}

const reducer = (state = initialState, action) => {

	const newState = {...state}

	switch(action.type) {
		case 'ADD_ITEM':
			const newId = [...newState.baseData].length + 1
			return {
				...newState,
				baseData: [...newState.baseData, {
					id: newId,
					name: action.item
				}]
			};
			break;
		case 'LIST_ITEMS':
			return {
				...newState,
				baseData: action.items
			}
	}


	return newState
}

export default reducer