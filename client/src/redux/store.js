import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // thunkMiddleware nos permite realizar las req.

export default store;