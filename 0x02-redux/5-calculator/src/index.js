import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import number from './reducers/index.jsx';

const allReducers = combineReducers({
    number: number
});


const store = createStore(
    allReducers,
    applyMiddleware()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
