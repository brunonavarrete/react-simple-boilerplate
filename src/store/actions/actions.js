import axios from 'axios'
const API_BASE_URL = 'http://127.0.0.1:8000/api/'

export const onAddItem = item => {
	return {
		type: 'ADD_ITEM',
		item: item
	}
}

export const fetchItems = () => {
	return dispatch => {
		axios.get(`${ API_BASE_URL }base`)
		.then(res => {
			dispatch(listItems(res.data.base))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

export const listItems = items => {
	return {
		type: 'LIST_ITEMS',
		items: items
	}
}