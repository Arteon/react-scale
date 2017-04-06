import {isLoggedIn} from 'shared_module/api'
import {
    LOGIN_AUTH_FAIL,
    LOGIN_AUTH_SUCCESS,
    LOGOUT_AUTH_SUCCESS,

    LOCATION_CHANGE
} from 'shared_module/actions'

let initialState = {
    loggedIn: isLoggedIn()
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            {
                let loggedIn = isLoggedIn()
                if (action.payload === '/auth') {
                    return {
                        ...state
                    }
                }
                if (loggedIn) {
                    console.log('USER IS LOGGED IN')
                    return {
                        ...state,
                        loggedIn: true
                    }
                } else {
                    console.log('USER IS NOT LOGGED IN')
                    return {
                        ...state,
                        loggedIn: false
                    }
                }

            }

        case LOGOUT_AUTH_SUCCESS:
            {
                return {
                    ...state,
                    loggedIn: false
                }
            }

        case LOGIN_AUTH_FAIL:
            {
                return {
                    ...state,
                    loggedIn: false
                }
            }
        case LOGIN_AUTH_SUCCESS:
            {
                return {
                    ...state,
                    loggedIn: true
                }
            }
        default:
            return state
    }
}
