import React from 'react';

import {Route, Redirect, IndexRoute, Router, browserHistory} from 'react-router';
import {App, Dashboard} from 'containers';

import {Conversation, Inbox, Login} from 'shared_module'

const Routing = (
    <Router history={browserHistory}>
        <Route name="App" path="" component={App}>
            <IndexRoute component={Login}/>
            <Route name="Login" path="/auth" component={Login}/>
            <Route name="Dashboard" path="/" component={Dashboard}/> {/* INBOX ROUTES */}
            <Route name="Inbox" path="inbox" component={Inbox}/>
            <Route name="Conversation" path="inbox/:id" component={Conversation}/>
            <Redirect from="/*" to="/auth"/>
        </Route>
    </Router>
)
export default Routing;
