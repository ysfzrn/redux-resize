// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import reduxResizeMiddleware from '../../../src';

const reduxResize = reduxResizeMiddleware();

function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(reduxResize)),
    );

    return store;
}

export { configureStore };
