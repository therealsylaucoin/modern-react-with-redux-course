import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //this is a component
import { createStore } from 'redux'; //this is a function

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    < Provider store={createStore(reducers)}>
        < App />
    </Provider>,
    document.querySelector('#root')
);