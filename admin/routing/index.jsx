import React from 'react';

import {Route, Redirect, Router} from 'react-router';
import {Dashboard, AppWrapper} from 'containers';
import {Conversation, Inbox, Login} from 'shared_module/containers'

const Routing = (
    <Route name="App" path="" component={AppWrapper}>
        <Route exact name="Login" path="/auth" component={Login}/>
        <Route exact name="Dashboard" path="/" component={Dashboard}/>
        <Route exact name="Inbox" path="/inbox" component={Inbox}/>
        <Route exact name="Conversation" path="/inbox/:id" component={Conversation}/>
        <Redirect from="/*" to="/auth"/>
    </Route>
)
export default Routing;
