import {
    getConversation_API,
    sendConversationMessage_API,
    sendQuote_API,
    declineQuoteRequest_API,
    resultOK
} from 'shared_module/api'

export const GET_CONVERSATION_SUCCESS = 'GET_CONVERSATION_SUCCESS'
export const GET_CONVERSATION_FAIL = 'GET_CONVERSATION_FAIL'

export const SUBMIT_QUOTE_SUCCESS = 'ACCEPT_QUOTE_SUCCESS'
export const SUBMIT_QUOTE_FAIL = 'ACCEPT_QUOTE_FAIL'

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL'

export const DECLINE_QUOTE_REQUEST_FAIL = 'DECLINE_QUOTE_REQUEST_FAIL'
export const DECLINE_QUOTE_REQUEST_SUCCESS = 'DECLINE_QUOTE_REQUEST_SUCCESS'

export const GET_CONVERSATION = (id) => {
    return async function() {
        let result = await getConversation_API(id)
        if (!resultOK(result)) {
            return {type: GET_CONVERSATION_FAIL, error: result.data}
        }
        return {type: GET_CONVERSATION_SUCCESS, result: result.data}
    }
}

export const SEND_MESSAGE = (data) => {
    return async function() {
        let result = await sendConversationMessage_API(data)
        if (!resultOK(result)) {
            return {type: GET_CONVERSATION_FAIL, error: result.data}
        }
        return {type: SEND_MESSAGE_SUCCESS, result: result.data}
    }
}

export const SUBMIT_QUOTE = (data) => {
    return async function() {
        let result = await sendQuote_API(data)
        if (!resultOK(result)) {
            return {type: SUBMIT_QUOTE_FAIL, error: result.data}
        }
        return {type: SUBMIT_QUOTE_SUCCESS, result: result.data}
    }
}

export const DECLINE_QUOTE_REQUEST = (id, data) => {
    return async function() {
        let result = await declineQuoteRequest_API(id, data)
        if (!resultOK(result)) {
            return {type: DECLINE_QUOTE_REQUEST_FAIL, error: result.data}
        }
        return {type: DECLINE_QUOTE_REQUEST_SUCCESS, result: result.data}
    }
}
