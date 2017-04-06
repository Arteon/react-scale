import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'shared_module/actions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Auth actions', () => {

    it('creates LOGIN_AUTH_SUCCESS when login has been done successfully', () => {
        let result = {
            data: {
                token: 'string'
            }
        }

        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_SUCCESS,
                ...result.data
            }
        ]

        const store = mockStore({})

        return store.dispatch(actions.LOGIN_AUTH({})).then(() => {
            let dispatched = store.getActions()
            console.log(dispatched)
            expect(dispatched).toEqual(expectedActions)
        })
    })

    it('creates LOGIN_AUTH_FAIL when login hasn\'t been done successfully', () => {
        let result = {
            data: {
                errors: ['array']
            }
        }
        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_FAIL,
                ...result.data
            }
        ]
        const store = mockStore({})
        return store.dispatch(actions.LOGIN_AUTH({})).then((res) => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
