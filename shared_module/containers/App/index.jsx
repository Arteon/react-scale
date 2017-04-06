import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppComponent} from 'shared_module/components'
import {CLOSE_SIDEBAR, OPEN_SIDEBAR, WINDOW_RESIZE} from 'shared_module/actions'

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    constructor(props) {
        super(props)
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
        onHeaderInboxClick: React.PropTypes.func,
        sidebarRouting: React.PropTypes.array,
        handleWindowResize: React.PropTypes.func
    }

    componentDidUpdate() {}

    componentWillMount() {
        let {handleWindowResize} = this.props
        window.addEventListener('resize', handleWindowResize)
    }

    render() {
        let {
            children,
            sidebarOpened,
            closeSidebar,
            obfuscatorActive,
            isLoggedIn,
            logout,
            onHeaderInboxClick,
            toggleSidebar,
            sidebarRouting
        } = this.props
        let title = children.props.route.name

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

        return (<AppComponent {...propsForAppComponent}/>)
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
