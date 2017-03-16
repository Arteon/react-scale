import {GET_INBOX_SUCCESS, GET_INBOX_FAIL} from 'actions/inbox'
import {LOCATION_CHANGE} from 'shared_module/actions'

let initialState = {
    isDataLoading: true,
    errorLoadingConversations: false,
    conversations: []
}

export function inbox(state = initialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            if (action.payload.pathname === '/inbox') {
                return {...state}
            }
            return initialState
        case GET_INBOX_SUCCESS:
            return {
                ...state,
                conversations: action.result.results
            }
        case GET_INBOX_FAIL:
            return {
                ...state,
                errorLoadingConversations: true,
                conversations: []
            }
        default:
            return state
    }
}
