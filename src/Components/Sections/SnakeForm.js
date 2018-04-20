import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

import {Headline} from '../ui/typography';

const FormContainer = styled(Flex)`
	flex-direction: column;
`;

class SnakeForm extends React.Component {
	constructor (props) {
			super(props);
			this.state = {
					firstName:'',
					lastName:'',
					zipcode:'',
					email: ''
			};

			this.onChange = this.onChange.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
		
	}
	onChange(event) {
			console.log(event.target.name);
			this.setState({[event.target.name]: event.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.addMember(this.state);
	}

	render (props) {
		return (    
			<FormContainer is="form">
				<Headline>Save a Snake Now!</Headline>
				<p>Sponsor a snake today and we'll put you on the hall of heroes!</p>
				<label>First Name</label>
				<input type="text" 
					name="firstName"
					value={this.state.firstName}
					onChange={this.onChange} />
				<label>Last Name</label>
				<input type="text" 
					name="lastName"
					value={this.state.lastName}
					onChange={this.onChange} />
				<label>Email</label>
				<input type="email"
					name="email"
					value={this.state.email}
					onChange={this.onChange} /> 
				<label>ZipCode</label>   
				<input type="number"
					name="zipcode"
					value={this.state.zipcode}
					onChange={this.onChange} />    
				<input type="submit" value="Submit" onClick={this.onSubmit}/>    
			</FormContainer>    
		);
	}
}

export default SnakeForm;