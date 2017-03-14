import React, {Component} from 'react';
import {Dimmer} from 'semantic-ui-react';
import {Header, Sidebar, Footer} from 'shared_module/components'
import cx from 'classnames';
import './App.scss';

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: React.PropTypes.node.isRequired,
        sidebarOpened: React.PropTypes.bool,
        obfuscatorActive: React.PropTypes.bool,
        closeSidebar: React.PropTypes.func,
        isLoggedIn: React.PropTypes.bool,
        logout: React.PropTypes.func,
        toggleSidebar: React.PropTypes.func,
        onHeaderInboxClick: React.PropTypes.func,
        title: React.PropTypes.string,
        sidebarRouting: React.PropTypes.array
    }

    render() {
        let {children, sidebarOpened, closeSidebar, obfuscatorActive, isLoggedIn, logout, onHeaderInboxClick, toggleSidebar, title, sidebarRouting} = this.props;
        let mainBlockStyles = cx({no_sidebar: !isLoggedIn})

        return (
            <div className="page-layout">
                {/* component will be rendered only if isLoggedIn === true, so isLoggedIn in sidebar is always true */}
                {isLoggedIn && <Sidebar open={sidebarOpened} routing={sidebarRouting} isLoggedIn={isLoggedIn} logout={logout} />}
                <Header toggleSidebar={toggleSidebar} onInboxClick={onHeaderInboxClick} title={title} isLoggedIn={isLoggedIn}/>
                <main className={mainBlockStyles}>
                    <div className="main-content">
                        <div className="ui grid container">
                            {children}
                        </div>
                    </div>
                    <Footer/>
                </main>
                <Dimmer active={obfuscatorActive} onClick={closeSidebar} />
            </div>
        );
    }
}
