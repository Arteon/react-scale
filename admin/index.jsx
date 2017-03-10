import React from 'react';
import {render} from 'react-dom';
// css
import 'styles/index.scss';
import 'semantic-ui-css/semantic.css';

import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import RootReducer from './reducers'
import {Root} from 'shared_module/components'
import devTools from 'shared_module/utils/dev'
import routes from './routing';
import config from 'config'

if (config.isDev) {
    // maybe we can add config as argument here
    devTools.init()
    // @Metnew: move composeWithDevTools here!
}

function configureStore(initialState) {
    // Add initialState handler
    const middleware = applyMiddleware(routerMiddleware(browserHistory));
    const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)), middleware);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

const renderRoot = (Root) => {
    let preloadedState = window.__PRELOADED_STATE__
    window.BASE_API = config.BASE_API
    let store = configureStore(preloadedState);
    let history = syncHistoryWithStore(browserHistory, store);
    render(<Root routes={routes} history={history} store={store}/>, document.getElementById('app'));
}

renderRoot(Root)
//
// if (module.hot) {
//     module.hot.accept()
// }

// FIXME: SSR!!!
// match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
//     render(
//         <Provider store={store}>
//             <Router {...renderProps} />
//         </Provider>, document.getElementById('app'))
// })
