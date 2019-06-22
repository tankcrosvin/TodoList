// import TodoHeader from './TodoHeader/index.js';
//如果不写后面的Index.js，程序会自动的寻找TodoHeader目录下的index.js文件



// import TodoHeader from './TodoHeader';
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';
// 
// export {
// 	TodoHeader,
// 	TodoInput,
// 	TodoList,
// }


export {
	default as TodoHeader
}
from './TodoHeader';


export {
	default as TodoInput
}
from './TodoInput';


export {
	default as TodoList
}
from './TodoList';

export {
	default as Like
}
from './Like';