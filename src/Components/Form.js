import React from 'react';


class Form extends React.Component {
	constructor (props) {
		super();
		this.state = {
			userName: '',
			userLocation:'',
			snakeSelected:''
		};
	}	

	render () {
		return (
			<div>
			<form>
				<input type='email'/>

			</form>
				<button onClick={this.props.addSnake}>Add Snakes</button>
			</div>
		);
	}
}

export default Form;