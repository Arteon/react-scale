import {getCategories_API} from '../api'
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const APPLICATION_INIT = '@@INIT'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL'

export const GET_CATEGORIES = () => {
    return async function() {
        let result = await getCategories_API()
        if (!resultOK(result)) {
            return {type: GET_CATEGORIES_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: GET_CATEGORIES_SUCCESS, result: result.data}
    }
}
