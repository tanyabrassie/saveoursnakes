import React from 'react';

class SponsorForm extends React.Component {
    constructor () {
        super();
        this.state = {
            personName:'',
            personStory:'',
            personLocation: ''
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(event);
    };

    onChange(event) {
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    render () {
        return (    
            <form>
                <h1>Fill out the Form to Sponsor Today.</h1>
                <p>Sponsor a snake today and we'll put you on the hall of heroes!</p>
                <label>Name</label>
                <input type="text" 
                    name="personName"
                    value={this.state.personName}
                    onChange={this.onChange} />
                <input type="text" 
                    name="personLocation"
                    value={this.state.personLocation}
                    onChange={this.onChange} />
                <textarea
                    name="personStory"
                    value={this.state.personStory}
                    onChange={this.onChange}></textarea>    
                <input type="submit" value="Submit"/>    
            </form>    
        );
    }
}

export default SponsorForm;