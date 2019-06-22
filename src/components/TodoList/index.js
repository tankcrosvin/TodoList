import React, {
	Component
} from 'react';

import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
	//对传入的数据做类型检查
	static propTypes = {
		todos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			content: PropTypes.string.isRequired,
			isCompleted: PropTypes.bool.isRequired
		})).isRequired,
		onCheckBoxChanged: PropTypes.func,
	}
	render() {
		return (
			<ol>
				{
					this.props.todos.map(item=>{
						return (
							<TodoItem 
								handleCheckBoxClick={this.props.onCheckBoxChanged}
								key={item.id}
								{...item}
							/>
						)
					})
				}
			</ol>
		)
	}
}