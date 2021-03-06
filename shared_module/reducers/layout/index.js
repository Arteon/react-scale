import {UI_OPEN_SIDEBAR, UI_CLOSE_SIDEBAR, UI_WINDOW_RESIZE, LOCATION_CHANGE} from 'shared_module/actions'

 // UI_ACTIVATE_OBFUSCATOR, UI_DEACTIVATE_OBFUSCATOR
const initialState = {
    sidebarOpened: false,
    obfuscatorActive: false,
    isMobile: false
}

export function layout(state = initialState, action) {
    let isMobile = window.innerWidth < 1025
    switch (action.type) {
        case UI_WINDOW_RESIZE:
            {
                return {
                    ...state,
                    isMobile
                }
            }
        case UI_OPEN_SIDEBAR:
            return Object.assign({}, state, {
                sidebarOpened: true,
                obfuscatorActive: true
            })
        case UI_CLOSE_SIDEBAR:
            return Object.assign({}, state, {
                sidebarOpened: false,
                obfuscatorActive: false,
                isMobile
            })
        case LOCATION_CHANGE:
            return Object.assign({}, state, {
                sidebarOpened: false,
                obfuscatorActive: false,
                isMobile
            })
        default:
            return state
    }
}
