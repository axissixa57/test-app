import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '@/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunkMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const preloadedState = window.__INITIAL_DATA__;

delete window.__INITIAL_DATA__;

const store = createStore(rootReducer, preloadedState, enhancer)

export default store
