import React, {Component} from 'react';
import {Icon, Button, Popup, Image} from 'semantic-ui-react';
import {Link} from 'react-router';
import cx from 'classnames';
// import Logo from '../Logo'
import './Header.scss'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        openSidebar: React.PropTypes.func,
        title: React.PropTypes.string,
        toggleSidebar: React.PropTypes.func,
        onInboxClick: React.PropTypes.func,
        isLoggedIn: React.PropTypes.bool
    }

    render() {
        // onInboxClick
        let {title, toggleSidebar, isLoggedIn, onInboxClick} = this.props;
        let headerStyles = cx({
            no_sidebar: !isLoggedIn
        })
        // console.log(sidebarStateChange)
        return (
            <header className={headerStyles}>
                <div className="header-inner">
                    {/* {!isLoggedIn && <Logo />} */}
                    {isLoggedIn && <span className="title">
                         <Icon name='content' onClick={toggleSidebar}/> {title}
                    </span>}
                    <span className="spacer"></span>
                    {isLoggedIn && <Popup
                        trigger={<Button icon as={Link} to="/inbox" basic>
                            <Icon name='comments outline' size="large"/>
                        </Button>}
                        content="Action with Inbox."
                    />}
                </div>
            </header>
        )
    }
}
