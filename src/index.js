import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap';

// import '../node_modules/swiper/dist/css/swiper.min.css';
// import '../node_modules/swiper/dist/js/swiper.esm';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
