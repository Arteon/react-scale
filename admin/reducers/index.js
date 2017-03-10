import * as inbox from './inbox'
import * as conversation from './conversation'

import * as layout from 'shared_module/reducers/layout';
import * as loginCR from 'shared_module/reducers/loginCR'
import * as auth from 'shared_module/reducers/auth'
import * as media from 'shared_module/reducers/media'
import * as utils from 'shared_module/reducers/error'


import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    ...layout,
    ...inbox,
    ...auth,
    ...conversation,
    ...dashboard,
    ...media,
    ...utils,
    ...loginCR,
    routing: routerReducer
})
