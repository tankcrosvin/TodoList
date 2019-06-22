import React from 'react';


export default class Like extends React.Component {
	constructor() {
		super()

		this.state = {
			isLiked: false,
			// toggle: false,
		}
	}
	render() {
		return (
			<div>
				<span onClick = {this.handleLikeCLick.bind(this)}>
					{this.state.isLiked?'YES':'NO'}
				</span>
			</div>
		)
	}


	handleLikeCLick = () => {
		this.setState((prevState) => {
			return {
				isLiked: !prevState.isLiked,
			}
		}, () => {
			// console.log(this.state.isLiked, '22222回调中的state2222')
		});
	}

}