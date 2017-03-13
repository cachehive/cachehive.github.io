//require('../css/bundle.less')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import Bootstrap from '../3rdparty/bootstrap-without-jquery.min.js';

import About from './pages/about';
import Layout from './pages/layout';
import Portfolio from './pages/portfolio';

const app = document.getElementById('app');

ReactDOM.render(
  	<Router history={hashHistory}>
    	<Route path="/" component={Layout}>
 	  		<Route path="#about" component={About}></Route>
 	  		<Route path="#portfolio" component={Portfolio}></Route>
	  	</Route>
	</Router>, app);