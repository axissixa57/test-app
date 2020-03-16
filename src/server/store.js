import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '@/reducer'

const middlewares = [thunkMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
