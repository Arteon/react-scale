import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'shared_module/actions'
import nock from 'nock'
import fetch from 'node-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Media actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates GET_PHOTOS_FAIL when it wasn\'t successful', () => {
        nock('http://example.com').get('/photos').reply(400, {
            data: {
                error: 'string'
            }
        })

        const expectedActions = {
            type: actions.GET_PHOTOS_FAIL,
            error: 'Sorry, couldn\'t load photos'
        }

        const store = mockStore({})

        return store.dispatch(actions.GET_PHOTOS({})).then(() => { // return of async actions
            console.log(store.getActions())
            console.log(expectedActions)
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates GET_PHOTOS_SUCCESS when it was successful', () => {
        nock('http://example.com/').post('/auth').reply(200, {
            data: {
                result: [333]
            }
        })

        const expectedActions = {
            type: actions.GET_PHOTOS_SUCCESS,
            result: [333]
        }

        const store = mockStore({})

        return store.dispatch(actions.GET_PHOTOS({})).then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates ADD_PHOTO_SUCCESS when photo has been added successfully', () => {
        nock('http://example.com/').post('/auth').reply(400, {
            data: {
                errors: ['array']
            }
        })

        const expectedActions = {
            type: actions.ADD_PHOTO_SUCCESS,
            error: {
                errors: ['array']
            }
        }

        const store = mockStore({})

        return store.dispatch(actions.ADD_PHOTO({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates ADD_PHOTO_FAIL when photo hasn\'t been added successfully', () => {
        nock('http://example.com/').post('/auth').reply(400, {
            data: {
                errors: ['array']
            }
        })

        const expectedActions = {
            type: actions.ADD_PHOTO_FAIL,
            error: 'Sorry, error occured.'
        }

        const store = mockStore({})

        return store.dispatch(actions.ADD_PHOTO({})).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
