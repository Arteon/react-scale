import {
    login_API,
    register_API,
    recoverPassword_API,
    setLocalToken,
    resetLocalToken,
    resultOK
} from 'shared_module/api'

export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS'
export const LOGIN_AUTH_FAIL = 'LOGIN_AUTH_FAIL'

export const LOGOUT_AUTH_SUCCESS = 'LOGOUT_AUTH_SUCCESS'

export const RECOVER_PASSWORD_AUTH_SUCCESS = 'RECOVER_PASSWORD_AUTH_SUCCESS'
export const RECOVER_PASSWORD_AUTH_FAIL = 'RECOVER_PASSWORD_AUTH_FAIL'

export const REGISTER_AUTH_SUCCESS = 'REGISTER_AUTH_SUCCESS'
export const REGISTER_AUTH_FAIL = 'REGISTER_AUTH_FAIL'

/*
    send user credentials data for login
    @param {object} - data
*/
export const LOGIN_AUTH = (data) => {
    return async() => {
        let result = await login_API(data)
        if (!resultOK(result)) {
            return {type: LOGIN_AUTH_FAIL, error: result.data}
        }
        setLocalToken(result.data.token)
        return {type: LOGIN_AUTH_SUCCESS, result: result.data}
    }
}
/*
    logging out user
    @param {object} - data - currently, free arg
*/

export const LOGOUT_AUTH = () => {
    resetLocalToken()
    return {type: LOGOUT_AUTH_SUCCESS}
}
/*
    send user credentials data for password recovery
    @param {object} - data
*/
export const RECOVER_PASSWORD = (data) => {
    return async() => {
        let result = await recoverPassword_API(data)
        if (!resultOK(result)) {
            return {type: RECOVER_PASSWORD_AUTH_FAIL, error: result.data}
        }
        return {type: RECOVER_PASSWORD_AUTH_SUCCESS, result: result.data}
    }
}
/*
    send user credentials data for register
    @param {object} - data
*/
export const REGISTER_AUTH = (data) => {
    return async() => {
        let result = await register_API(data)
        if (!resultOK(result)) {
            return {type: REGISTER_AUTH_FAIL, error: result.data}
        }
        return {type: REGISTER_AUTH_SUCCESS, result: result.data}
    }
}
