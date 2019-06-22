import React from 'react';
import {
	render
} from 'react-dom';
import App from './App';

//如果想要全局的扩展React.Component的prototype,
//比如，想把ajax的方法全局的挂载到React.Component的this上，就可以使用下面的方式

//引入所有的ajax请求
// import * as sevices from './services';

//在prototype上挂载一个叫http的东西，然后就可以在组件内部通过 this.http.方法名 来执行一些操作
// React.Component.prototype.http = sevices;

render(
	<App />,
	document.querySelector('#root')
)