import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimmer} from 'semantic-ui-react';
import {Header, Sidebar, Footer, AppComponent} from 'shared_module/components'
import {CLOSE_SIDEBAR, OPEN_SIDEBAR, WINDOW_RESIZE, LOGOUT_AUTH} from 'shared_module/actions';
import {push} from 'react-router-redux'
import cx from 'classnames';
// import sidebarRoutingList from 'routing/sidebarRoutingList'

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    constructor(props) {
        super(props);
    }

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
    // componentWillMount() {}

    checkAppLoggedIn() {
        let {checkLoggedIn, isLoggedIn, router} = this.props;
        let path = router.getCurrentLocation().pathname;
        // check is user allowed to visit this path
        // console.log('checkAppLoggedIn: isLoggedIn + path', isLoggedIn, path, Date.now())
        checkLoggedIn(isLoggedIn, path)
    }
    //
    // componentWillReceiveProps() {
    //     console.log(this.props)
    //     this.checkAppLoggedIn()
    // }
    componentDidUpdate() {
        this.checkAppLoggedIn()
    }

    componentWillMount() {
        let {handleWindowResize} = this.props;
        this.checkAppLoggedIn()
        window.addEventListener('resize', handleWindowResize);
    }

    getSidebarRouting() {
        return sidebarRoutingList
    }

    render() {
        let {children, sidebarOpened, closeSidebar, obfuscatorActive, isLoggedIn, logout, onHeaderInboxClick, toggleSidebar} = this.props;
        let title = children.props.route.name;
        let mainBlockStyles = cx({
            no_sidebar: !isLoggedIn
        })
        let sidebarRouting = this.getSidebarRouting()

        let propsForAppComponent = {
            sidebarRouting,
            children,
            sidebarOpened,
            closeSidebar,
            obfuscatorActive,
            isLoggedIn,
            logout,
            onHeaderInboxClick,
            toggleSidebar,
            title
        }

        return (
            <AppComponent />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        sidebarOpened: state.layout.sidebarOpened,
        obfuscatorActive: state.layout.obfuscatorActive,
        isLoggedIn: state.auth.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeSidebar: () => {
            dispatch(CLOSE_SIDEBAR())
        },
        logout: () => {
            dispatch(LOGOUT_AUTH())
        },
        checkLoggedIn: function(isLoggedIn, path) {
            // this code is strange
            //  have to be rewritten

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
        },
        toggleSidebar: () => {
            dispatch(OPEN_SIDEBAR())
        },
        onHeaderInboxClick: () => {
            // dispatch()
        },
        handleWindowResize: () => {
            dispatch(WINDOW_RESIZE())
        }
    }
}
