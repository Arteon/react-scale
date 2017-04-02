import * as reducers from 'shared_module/reducers'


import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    ...reducers,
    routing: routerReducer
})
