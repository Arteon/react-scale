import {loginCR as reducer} from 'shared_module/reducers'
import * as actions from 'shared_module/actions'

describe('LoginContainer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {x:null})).toEqual({
            loginError: false,
            loginSuccess: false
        })
    })

    it('should handle LOGIN_AUTH_FAIL', () => {
        expect(reducer({}, {
            type: actions.LOGIN_AUTH_FAIL,
            error: 'string'
        })).toEqual({
            loginError: 'string',
            loginSuccess: false
        })
    })

    it('should handle LOGIN_AUTH_SUCCESS', () => {
        expect(reducer({}, {
            type: actions.LOGIN_AUTH_SUCCESS
        })).toEqual({
            loginError: false,
            loginSuccess: true
        })
    })
})
