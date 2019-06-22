import React, {
	Component,
	Fragment
} from 'react';

import {
	TodoHeader,
	TodoInput,
	TodoList,
	Like
} from './components/index';



export default class App extends Component {
	// state = {
	// 	title: 'Todo',
	// }

	constructor() {
		super()

		this.state = {
			title: 'todo',
			todos: [{
				id: 1,
				content: 'eat',
				isCompleted: true,
			}, {
				id: 2,
				content: 'walikng',
				isCompleted: false,
			}]
		}
	}

	//传递给input的方法
	addTodo = (todoTitle) => {
		// console.log(todoTitle, 'ttttttttttt');
		this.setState({
			todos: this.state.todos.concat({
				id: Math.random() * 10,
				content: todoTitle,
				isCompleted: false
			}),

		})
	}

	//checkbox的状态发送变化
	onCheckBoxChanged = (checkedid) => {
		// console.log('onCheckBoxChanged', checkedid);
		// console.log(this.state.todos[checkedid - 1].isCompleted);
		this.setState((prevState) => {
			return {
				todos: prevState.todos.map(item => {
					if (item.id === checkedid) {
						item.isCompleted = !item.isCompleted;
					}
					return item
				})
			}
		});
	}
	render() {
		// console.log(this.state);
		return (
			<Fragment>
				<TodoHeader title={this.state.title}></TodoHeader>
				<TodoInput addTodo={this.addTodo}/>
				<TodoList todos={this.state.todos} onCheckBoxChanged={this.onCheckBoxChanged}/>
				<Like/>
			</Fragment>
		)
	}
}