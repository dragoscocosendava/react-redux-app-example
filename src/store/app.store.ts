import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

import { appReducer } from './app.reducer';

const middlewares = [logger];

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
