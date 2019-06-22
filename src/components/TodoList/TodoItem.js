import React from 'react';
// const noop =()=>{} 定义一个空函数
export default class TodoItem extends React.PureComponent {
	// 	shouldComponentUpdate(nextProps, nextState) {
	// 		// console.log('nextProps====', nextProps, nextState);
	// 		// console.log('this.props===', this.props);
	// 		if (nextProps.isCompleted !== this.props.isCompleted) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 
	// 	}
	render() {
		// console.log(this.props, '12321312312312');
		// console.log(`${this.props.title} will be rendered!!!`);
		return (
			<li>
				<input 
					type="checkbox" 
					checked ={this.props.completed}
					onChange = {this.handleCheckBoxChanged}
				/>
				{this.props.title}
				<span>{this.props.completed?'  Done':'  Undone'}</span>
				
			</li>
		)
	}
	handleCheckBoxChanged = () => {
		this.props.handleCheckBoxClick && this.props.handleCheckBoxClick(this.props.id)
	}
}