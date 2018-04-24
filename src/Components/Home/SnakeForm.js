import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

import {Headline, BasicText} from '../ui/typography';
import {Button} from '../ui/Button';
import ErrorBanner from '../ErrorBanner';

const FormContainer = styled(Flex)`
  flex-direction: column;
  border-radius: 2px;
`;

class SnakeForm extends React.Component {
	constructor (props) {
			super(props);
			this.state = {
        firstName:'',
        lastName:'',
        zipcode:'',
        email: '',
        hasErrors: false
			};

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
  }
 
	handleSubmit(e){
    e.preventDefault();
    //check to see if form is valid.
    const emailRegEx = /\S+@\S+\.\S+/;
    const zipCodeRegEx = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const passesValidation = this.state.firstName.trim().length > 1 && 
      this.state.lastName.trim().length > 1 && 
      emailRegEx.test(this.state.email) && 
      zipCodeRegEx.test(this.state.zipcode);
    
    if (passesValidation) {
      this.props.addMember(this.state);

      //clear state after submission 
      this.setState({
        firstName:'',
        lastName:'',
        zipcode:'',
        email: '',
        hasErrors: false
      });

    } else {
      //show errors 
     this.setState({hasErrors: true});
    }
  }

	render (props) {
		return (
			<FormContainer my={4} px={5} is="form" onSubmit={this.handleSubmit}>
				<Headline is="h2" py={2}>Save a Snake Right Now!</Headline>
				<BasicText py={2}>
					It's easy, just three steps! Fill out the form below and you'll immediately be featured on our high profile Snake Savior Wall and notified of the snakes you've saved!  
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
        <Flex w={'200px'} py={3}> 
          <Button>Save Snakes Now</Button>
        </Flex>
        {this.state.hasErrors && <ErrorBanner message={'Whoops, you have some errors!'}/>}
			</FormContainer>    
		);
	}
}

export default SnakeForm;