import {auth as reducer} from 'shared_module/reducers'
import * as actions from 'shared_module/actions'

describe('utils reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {x:'string'})).toEqual({loggedIn:false})
    })

    it('should handle LOGOUT_AUTH_SUCCESS', () => {
        expect(reducer({
            loggedIn: true
        }, {
            type: actions.LOGOUT_AUTH_SUCCESS
        })).toEqual({
            loggedIn: false
        })
    })

    it('should handle LOGIN_AUTH_FAIL', () => {
        expect(reducer({
            loggedIn: false
        }, {
            type: actions.LOGIN_AUTH_FAIL
        })).toEqual({
            loggedIn: false
        })
    })

    it('should handle LOGIN_AUTH_SUCCESS', () => {
        expect(reducer({
            loggedIn: false
        }, {
            type: actions.LOGIN_AUTH_SUCCESS
        })).toEqual({
            loggedIn: true
        })
    })
})
