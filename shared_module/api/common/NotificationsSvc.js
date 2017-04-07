import {get} from '../utils';

export async function getNotifications_API() {
	return await get('/notifications/')
}
