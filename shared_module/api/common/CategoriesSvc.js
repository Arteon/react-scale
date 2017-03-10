import {get, post} from '../utils';

export async function getCategories_API() {
	return await get('/categories/')
}
