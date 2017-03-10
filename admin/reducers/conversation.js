import {
    GET_CONVERSATION_SUCCESS,
    ACCEPT_QUOTE_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    GET_CONVERSATION_FAIL,
    ACCEPT_QUOTE_FAIL,
    SEND_MESSAGE_FAIL
} from 'actions/conversation'
import {LOCATION_CHANGE} from 'shared_module/actions'

const initialState = {
    conversation: {}
}

export function conversation(state = initialState, action) {
    switch (action.type) {
        case GET_CONVERSATION_SUCCESS:
            return {
                ...state,
                conversation: action.result
            }
        case GET_CONVERSATION_FAIL:
            return {...state, conversation: action.result}
        case ACCEPT_QUOTE_SUCCESS:
            return {...state}
        case ACCEPT_QUOTE_FAIL:
            return {...state}
        case SEND_MESSAGE_SUCCESS: {
            let items = [action.result].concat(state.conversation.items)
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    items: items
                }
            }
        }
        case SEND_MESSAGE_FAIL:
            return {...state}
        case LOCATION_CHANGE:
            return {...state}
        default:
            return {...state}
        }
    }
