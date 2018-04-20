import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

import {Headline, BasicText} from '../ui/typography';
import {Button} from '../ui/Button';

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

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	handleChange(event) {
			this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
    this.props.addMember(this.state);

    this.setState({
      firstName:'',
      lastName:'',
      zipcode:'',
      email: ''
    });
  }
  
	render (props) {
		return (    
			<FormContainer p={2} is="form" onSubmit={this.handleSubmit}>  
				<Headline is="h2" py={2}>Save a Snake Right Now!</Headline>
				<BasicText py={2}>
					It's easy, just three steps! Fill out the form below and you'll immediately be featured on our Snake Savior Wall and notified of your snake wards.  
				</BasicText>
				<BasicText is="label">First Name</BasicText>
				<input type="text" 
					name="firstName"
					value={this.state.firstName}
					onChange={this.handleChange} />
				<BasicText is="label">Last Name</BasicText>
				<input type="text" 
					name="lastName"
					value={this.state.lastName}
					onChange={this.handleChange} />
				<BasicText is="label">Email</BasicText>
				<input type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange} /> 
				<BasicText is="label">ZipCode</BasicText>   
				<input type="number"
					name="zipcode"
					value={this.state.zipcode}
					onChange={this.handleChange} />   
        <Flex w={'200px'} py={2}> 
          <Button>Save Snakes Now</Button>   
        </Flex>
			</FormContainer>    
		);
	}
}

export default SnakeForm;