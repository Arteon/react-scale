import {LOGIN_AUTH_FAIL, LOGIN_AUTH_SUCCESS} from 'shared_module/actions'

const initialState = {
    loginError: false,
    loginSuccess: false
}
// LoginContainer Reducer
export function loginCR(state = initialState, action) {
    switch (action.type) {
        case LOGIN_AUTH_FAIL:
            return {
                ...state,
                loginError: action.error,
                loginSuccess: false
            }
        case LOGIN_AUTH_SUCCESS:
            return {
                ...state,
                loginError: false,
                loginSuccess: true
            }
        default:
            return state
    }
}
