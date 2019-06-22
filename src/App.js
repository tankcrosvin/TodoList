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

import {
	getTodo
} from './services';


export default class App extends Component {
	// state = {
	// 	title: 'Todo',
	// }

	constructor() {
		super()

		this.state = {
			title: 'todo',
			todos: [],
			isLoading: false
		}
	}

	getTodoData = () => {
		this.setState({
			isLoading: true,
		})
		getTodo().then(res => {
			console.log(res);
			if (res.status === 200) {
				this.setState({
					todos: res.data,
				});
			} else {
				//处理错误
			}
		}).catch(ajaxerr => {
			console.log(ajaxerr);
		}).finally(() => {
			this.setState({
				isLoading: false,
			})
		})
	}
	componentDidMount() {
		this.getTodoData();
	}

	//传递给input的方法
	addTodo = (todoTitle) => {
		// console.log(todoTitle, 'ttttttttttt');
		this.setState({
			todos: this.state.todos.concat({
				id: Math.random() * 10,
				title: todoTitle,
				completed: false
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
						item.completed = !item.completed;
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
				{
					this.state.isLoading 
					? 
					<div>wait,data is loading...</div> 
					: 
					<TodoList todos={this.state.todos} onCheckBoxChanged={this.onCheckBoxChanged}/>
				}
				<Like/>
			</Fragment>
		)
	}
}