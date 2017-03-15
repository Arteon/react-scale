import {utils as reducer} from 'shared_module/reducers'
import * as actions from 'shared_module/actions'

describe('utils reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: 'NOTHING'})).toEqual({})
    })

    it('should handle SEND_ERROR_TO_SERVER_FAIL', () => {
        expect(reducer({}, {
            type: actions.SEND_ERROR_TO_SERVER_FAIL,
            error: 'string'
        })).toEqual({})
    })

    it('should handle SEND_ERROR_TO_SERVER_SUCCESS', () => {
        expect(reducer({}, {
            type: actions.SEND_ERROR_TO_SERVER_SUCCESS,
            error: 'string'
        })).toEqual({})
    })
})
