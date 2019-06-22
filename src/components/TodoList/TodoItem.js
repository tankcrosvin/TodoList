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
		console.log(`${this.props.content} will be rendered!!!`);
		return (
			<li>
				<input 
					type="checkbox" 
					checked ={this.props.isCompleted}
					onChange = {this.handleCheckBoxChanged}
				/>
				{this.props.content}
				<span>{this.props.isCompleted?'  Done':'  Undone'}</span>
				
			</li>
		)
	}
	handleCheckBoxChanged = () => {
		this.props.handleCheckBoxClick && this.props.handleCheckBoxClick(this.props.id)
	}
}