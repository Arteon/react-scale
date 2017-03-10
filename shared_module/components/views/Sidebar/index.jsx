import React, {Component} from 'react';
import {Link} from 'react-router'
import {Menu, Icon} from 'semantic-ui-react'
import cx from 'classnames'
// import Logo from '../Logo'
import './Sidebar.scss';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        open: React.PropTypes.bool,
        isLoggedIn: React.PropTypes.bool,
        logout: React.PropTypes.func,
        routing: React.PropTypes.array
    }

    render() {
        const {
            open,
            isLoggedIn,
            routing
        } = this.props;

        let routes = routing.map((route, i) =>
        <Menu.Item as={Link} to={route.href} key={i} icon activeClassName='active'>
            <Icon name={route.icon} />
            {route.name}
        </Menu.Item>)

        let sidebarStyles = cx({
            open,
            sidebar: true
        })

        return (
            <Menu vertical fixed='left' className={sidebarStyles}>
                {/* <Logo centered/> */}
                {isLoggedIn && routes}
                { isLoggedIn && <Menu.Item className="logout" onClick={this.props.logout}>
                    <Icon name='sign out' />
                    Logout
                </Menu.Item>}
            </Menu>
        )
    }
}
