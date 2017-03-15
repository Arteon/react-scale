import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'shared_module/actions'
import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Auth actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates LOGIN_AUTH_SUCCESS when login has been done successfully', () => {
        nock('http://example.com/')
            .post('/auth')
            .reply(200, {
                data: {
                    token: "string"
                }
            })

        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_SUCCESS,
                result: {
                    token: "string"
                }
            }
        ]
        const store = mockStore({})

        return store.dispatch(actions.LOGIN_AUTH({})).then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates LOGIN_AUTH_FAIL when login hasn\'t been done successfully', () => {
        nock('http://example.com/')
            .post('/auth')
            .reply(400, {
            data: {
                errors: ["array"]
            }
        })

        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_FAIL,
                error: {
                    errors: ["array"]
                }
            }
        ]
        const store = mockStore({})


        return store.dispatch(actions.LOGIN_AUTH({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
