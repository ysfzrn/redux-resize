import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { configureStore } from './redux/store';

const store = configureStore();

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Main;
