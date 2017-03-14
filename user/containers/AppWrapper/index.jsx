import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LOGOUT_AUTH} from 'shared_module/actions';
import {push} from 'react-router-redux'
import {App} from 'shared_module/containers'
import sidebarRoutingList from 'routing/sidebarRoutingList'

@connect(mapStateToProps, mapDispatchToProps)
export default class AppWrapper extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: React.PropTypes.node.isRequired,
        router: React.PropTypes.object,
        isLoggedIn: React.PropTypes.bool,
        checkLoggedIn: React.PropTypes.func,
        logout: React.PropTypes.func
    }

    checkAppLoggedIn() {
        let {checkLoggedIn, isLoggedIn, router} = this.props;
        let path = router.getCurrentLocation().pathname;
        // check is user allowed to visit this path
        checkLoggedIn(isLoggedIn, path)
    }

    componentDidUpdate() {
        this.checkAppLoggedIn()
    }

    componentWillMount() {
        this.checkAppLoggedIn()
    }

    getSidebarRouting() {
        return sidebarRoutingList
    }

    render() {
        let {children, sidebarOpened, closeSidebar, isLoggedIn, logout} = this.props;
        let sidebarRouting = this.getSidebarRouting()
        let propsForAppComponent = {
            sidebarRouting,
            children,
            isLoggedIn,
            logout
        }

        return (
            <App {...propsForAppComponent} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.auth.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(LOGOUT_AUTH())
        },
        checkLoggedIn: function(isLoggedIn, path) {

            // allowed paths to visit
            // console.log('check logged in', isLoggedIn, path)
            let authPath = '/auth'
            let homePath = ''
            let allowedWithoutCredentialsPaths = [authPath]

            if (isLoggedIn) {
                // if user is logged in, but is going to visit auth path
                // then push him to homePath
                if (path === authPath) {
                    dispatch(push(homePath))
                }
            } else {
                // if user isnt logged in
                // console.log('USER ISNT LOGGED IN(APP.checkLoggedIn)')
                // if user is trying to visit not allowed without credentials path
                if (allowedWithoutCredentialsPaths.indexOf(path) === -1) {
                    dispatch(push(authPath))
                }
            }
        }
    }
}
