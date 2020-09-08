import axios from 'axios'
const API_BASE_URL = 'http://127.0.0.1:8000/api/'

// export const onAddItem = item => {
// 	const obj = { category_id: 1, name: item, description: 'Lorem ipsum dolor asit amet'}
// 	return dispatch => {
// 		axios.post(`${ API_BASE_URL }base`, obj)
// 		.then(res => {
// 			dispatch(addItem(res.data.item))
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// 	}
// }

// export const addItem = item => {
// 	return {
// 		type: 'ADD_ITEM',
// 		item: item
// 	}
// }

export const onFetchItems = () => {
	return dispatch => {
		axios.get(`${ API_BASE_URL }products`)
		.then(res => {
			dispatch(fetchItems(res.data.products))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

export const fetchItems = items => {
	return {
		type: 'FETCH_ITEMS',
		items: items
	}
}

export const onDeleteItem = id => {
	return dispatch => {
		axios.delete(`${ API_BASE_URL }products/${ id }`)
		.then(res => {
			dispatch(deleteItem(id))
		})
	}
}

export const deleteItem = id => {
	return {
		type: 'DELETE_ITEM',
		id: id
	}
}