import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Father,MainApp,TodoApp,FirstApp} from './components';

//Redux
import { Provider } from 'react-redux'
import { store } from './store/store'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <FirstApp/>
    </Provider>

)
