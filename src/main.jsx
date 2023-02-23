import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {GifExpertApp} from './components/gifExpert/GiftExpertApp';
import Cards from './components/Cards';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
)
