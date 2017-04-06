import {
    SEND_ERROR_TO_SERVER_FAIL,
    SEND_ERROR_TO_SERVER_SUCCESS
} from 'shared_module/actions'

let initialState = {}

export function utils(state = initialState, action) {
    switch (action.type) {
        case SEND_ERROR_TO_SERVER_FAIL: {
            return state
        }
        case SEND_ERROR_TO_SERVER_SUCCESS: {
            return state
        }
        default:
            return state
    }
}
