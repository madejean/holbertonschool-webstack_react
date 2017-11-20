import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import calc from './reducers/index.jsx';

const allReducers = combineReducers({
    calc: calc
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
