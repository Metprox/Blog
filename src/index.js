import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './store/reducers/index';
import rootSaga from './store/saga/index';

import App from 'Containers/App/App';
import 'Assets/scss/app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app'),
);
