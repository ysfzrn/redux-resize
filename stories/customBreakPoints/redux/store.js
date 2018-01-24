// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import reduxResizeMiddleware from '../../../src';

const myBreakPoints = [
    { width1: 0, width2: 576, device: 'too little' },
    { width1: 576, width2: 768, device: 'little' },
    { width1: 768, width2: 992, device: 'naaah' },
    { width1: 992, width2: 1200, device: 'big' },
    { width1: 1200, width2: 5000, device: 'too big' },
];

const reduxResize = reduxResizeMiddleware(myBreakPoints);

function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(reduxResize)),
    );

    return store;
}

export { configureStore };
