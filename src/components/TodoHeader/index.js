import React from 'react';
import PropTypes from 'prop-types';
export default function TodoHeader(props) {
	// console.log(props);
	return (
		<div>
			<h1>
				{props.title}
			</h1>
		</div>
	)
}

TodoHeader.propTypes = {
	title: PropTypes.string,
}

TodoHeader.defaultProps = {
	title: 'Waitting for to do',
}