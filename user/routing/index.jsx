import React from 'react';

import {Route, Redirect, IndexRoute, Router, browserHistory} from 'react-router';
import {Dashboard} from 'containers';
import {Conversation, Login, Inbox} from 'shared_module/containers'
import AppWrapper from 'containers'
const Routing = (
    <Router history={browserHistory}>
        {/* <AppWrapper> */}
        <Route name="App" path="" component={App}>
            <IndexRoute component={Login}/>
            <Route name="Login" path="/auth" component={Login}/>
            <Route name="Dashboard" path="/" component={Dashboard}/>
            <Route name="Inbox" path="inbox" component={Inbox}/>
            <Route name="Conversation" path="inbox/:id" component={Conversation}/> {/* PROFILE ROUTES */}
            <Redirect from="*" to="/auth"/>
        </Route>
        {/* </AppWrapper> */}
    </Router>
)
export default Routing;
