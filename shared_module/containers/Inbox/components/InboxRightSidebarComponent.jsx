import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    // Button,
    Icon,
    Loader,
    Item,
    Menu,
    Header,
    // Label,
    // Divider,
    Grid,
    Input
} from 'semantic-ui-react'
// import {Link} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
export default class Inbox extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        sendStateToParent: React.PropTypes.func
    }

    state = {
        activeItemFilter: 'inbox'
    }

    handleItemFilterClick(e, {name}) {
        let {sendStateToParent} = this.props;
        this.setState({...this.state, activeItemFilter:name})
        sendStateToParent(this.state)
    }

    render() {
        let {activeItemFilter} = this.state;
        let verticalMenu = {
            vertical: true,
            fluid: true
        }
        if (window.innerWidth < 769) {
            verticalMenu = {}
        }

        return (
            <div>
                <Input fluid icon = {<Icon name = 'search' inverted circular link />} placeholder = 'Search...' />
                <Menu pointing secondary {...verticalMenu}>
                    <Menu.Item name='inbox' active={activeItemFilter === 'inbox'} onClick={this.handleItemFilterClick.bind(this)}>
                        Inbox
                    </Menu.Item>

                    <Menu.Item name='new_requests' active={activeItemFilter === 'new_requests'} onClick={this.handleItemFilterClick.bind(this)}>
                        New requests
                    </Menu.Item>

                    <Menu.Item name='bookings' active={activeItemFilter === 'bookings'} onClick={this.handleItemFilterClick.bind(this)}>
                        Bookings
                    </Menu.Item>
                </Menu>
            </div>)
    }
}


function mapStateToProps(state) {
    return {conversations: state.inbox.conversations, isMobile:state.layout.isMobile}
}

function mapDispatchToProps(dispatch) {
    return {
        getConversations: async() => {
            let result = await dispatch(getInbox())
            dispatch(result)
        }
    }
}

//
//
// {
//     Inbox: {
//         "search1": ["hello", "привет", "HALO"],
//         "search2": [null, "привет", "HALO"]
//     }
// }
