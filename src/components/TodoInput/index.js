import React, {
	Component,
	createRef
} from 'react';

import PropTypes from 'prop-types';

export default class TodoInput extends Component {

	static propTypes = {
		btnText: PropTypes.string.isRequired,
	}
	static defaultProps = {
		btnText: 'AddTodo'
	}
	constructor() {
		super()
		this.state = {
			inputValue: '',
		}
		//在constructor里面创建ref
		this.inputDom = createRef();
	}
	render() {
		// console.log(this.state.inputValue);
		return (
			<div>
				<input 
					type="text" value={this.state.inputValue} 
					onChange={this.handleInputChange.bind(this)}
					onKeyUp={this.handEnterKeyUp}
					ref = {this.inputDom}
				/>
				<button 
					onClick={this.handleAddBtnClick}
					>
					{this.props.btnText}
				</button>
			</div>
		)
	}
	handleInputChange = (e) => {
		this.setState({
			inputValue: e.target.value,
		})
	}
	handEnterKeyUp = (e) => {
		if (e.keyCode === 13) {
			// console.log(e.keyCode);
			this.handleAddBtnClick()
		}
	}
	handleAddBtnClick = () => {
		if (this.state.inputValue === '') {
			return;
		}
		this.props.addTodo(this.state.inputValue);
		this.setState({
			inputValue: '',
		}, () => {
			this.inputDom.current.focus();
		});

	}
}