import React from 'react';
import {
	render
} from 'react-dom';
import App from './App';


// render 是react dom的一个方法,通常只会用一次 
render(
	<App />,
	document.querySelector('#root')
)