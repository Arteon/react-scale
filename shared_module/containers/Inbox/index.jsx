import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Icon,
    Loader,
    Item,
    Menu,
    Header,
    Grid,
    Input
} from 'semantic-ui-react'
import {GET_INBOX} from 'shared_module/actions';
import InboxItemComponent from './components/InboxItemComponent';
import InboxRightSidebarComponent from './components/InboxRightSidebarComponent';
import _ from 'lodash';
import './Inbox.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class Inbox extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isDataLoading: true,
        activeItemFilter: 'All'
    }

    static propTypes = {
        conversations: React.PropTypes.array,
        getConversations: React.PropTypes.func,
        isDataLoading: React.PropTypes.bool,
        isMobile: React.PropTypes.bool
    }

    componentDidMount() {
        this.props.getConversations()
    }

    sendStateToParent(rightSidebarState) {
        console.log(rightSidebarState)
    }

    render() {
        let {conversations} = this.props;
        let {activeItemFilter} = this.state;
        let conversationsLoading = _.isNull(conversations)
        let noConversations = _.isArray(conversations) && conversations.length === 0
        let conversations_components = null

        if (!noConversations && !conversationsLoading) {
            conversations_components = conversations.map((obj, i) => {
                return (<InboxItemComponent key={i} item={obj}/>)
            })
        }
        return (
            <Grid reversed="mobile vertically" stackable className="inbox-list-container">
                <Grid.Column width={12}>
                    {!conversationsLoading && <Loader active={true}>Loading...</Loader>}

                    {conversations_components && <Item.Group divided>
                        {conversations_components}
                    </Item.Group>}
                    {noConversations && <div>sorry, u have no convs</div>}

                </Grid.Column>
                <Grid.Column width={4}>
                    <InboxRightSidebarComponent sendStateToParent={this.sendStateToParent}/>
                </Grid.Column>
            </Grid>

        )
    }
}

function mapStateToProps(state) {
    const {activeItemFilter} = state.inbox
    // here must be filtering !!
    return {
        conversations: state.inbox.conversations,
        isMobile: state.layout.isMobile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getConversations: async() => {
            let result = await dispatch(GET_INBOX())
            dispatch(result)
        },
        filterConversationsInbox: () => {
            dispatch()
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
