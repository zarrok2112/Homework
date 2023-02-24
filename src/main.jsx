import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {GifExpertApp} from './components/gifExpert/GiftExpertApp';
import './app.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
)
