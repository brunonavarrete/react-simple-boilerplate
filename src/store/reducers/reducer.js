const initialState = {
	products: []
}

const reducer = (state = initialState, action) => {

	const newState = {...state}

	switch(action.type) {
		// case 'ADD_ITEM':
		// 	return {
		// 		...newState,
		// 		baseData: [...newState.baseData, action.item]
		// 	};
		// 	break;
		case 'FETCH_ITEMS':
			return {
				...newState,
				products: action.items
			}
			break;
		case 'DELETE_ITEM':
			let arr = [...newState.products]

			return {
				...newState,
				products: arr.filter(i => i.id !== action.id)
			}
			break;
	}


	return newState
}

export default reducer