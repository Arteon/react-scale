import {get, post, patch} from '../utils';
// import * as store from 'store2'

export async function getInbox_API() {
    return await get('/inbox/')
}

export async function getConversation_API(id) {
    return await get(`/inbox/${id}/`)
}

export async function sendConversationMessage_API(data) {
    return await post(`/messages/`, data)
}

export async function acceptConversationQuote_API(id, data) {
    return await post(`/quotes/${id}/`, data)
}

export async function sendQuote_API(data) {
    return await post('/quotes/', data)
}

export async function declineQuoteRequest_API(id, data) {
    return await patch(`/quote-requests/${id}/`, data)
}
