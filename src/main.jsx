import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Fetch} from './components/fetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fetch/>
  </React.StrictMode>,
)
