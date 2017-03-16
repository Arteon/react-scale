import * as inbox from 'reducers/inbox'
import * as conversation from 'reducers/conversation'
import * as reducers from 'shared_module/reducers'


import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    ...inbox,
    ...conversation,
    ...reducers,
    routing: routerReducer
})
