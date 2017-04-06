import {getInbox_API, resultOK} from 'shared_module/api'

export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS'
export const GET_INBOX_FAIL = 'GET_INBOX_FAIL'


export const GET_INBOX = ()  => {
    return async function() {
        let result = await getInbox_API()
        if (!resultOK(result)) {
            return {
                type: GET_INBOX_FAIL,
                error: result.data
            }
        }
        return {
            type: GET_INBOX_SUCCESS,
            result: result.data
        }

    }
}
