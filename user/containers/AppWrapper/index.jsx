import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import App from 'shared_module/components'

export default class AppWrapper extends Component {
    // constructor() {
    //
    // }
    static propTypes = {
        children: React.PropTypes.node.isRequired,
        router: React.PropTypes.object,
        sidebarOpened: React.PropTypes.bool,
        obfuscatorActive: React.PropTypes.bool,
        closeSidebar: React.PropTypes.func,
        isLoggedIn: React.PropTypes.bool,
        checkLoggedIn: React.PropTypes.func,
        logout: React.PropTypes.func,
        toggleSidebar: React.PropTypes.func,
        onHeaderInboxClick: React.PropTypes.func
    }

    render() {
        return (
            <App children={children} />
        )
    }
}
