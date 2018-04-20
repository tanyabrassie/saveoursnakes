import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {ThemeProvider} from 'styled-components';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    this.state = {
      members: storedMembers,
    };

  this.addMember = this.addMember.bind(this);
  this.getMemberProjects = this.getMemberProjects.bind(this);

  }

  addMember(member) {
    // get the state, spread it into a new array plus the new member
    const newMembers = [...this.state.members, member];
    this.setState({members: newMembers});

    // adding new state to the local storage 
    localStorage.setItem('members', JSON.stringify(newMembers));
  }

  getMemberProjects() {
		const { memberList } = this.props;
		const newMemberList = [];
		memberList.map((member, index) => {
			const zipcode = member.zipcode;
			axios.get('http://localhost:4545/getSnakeProjects?zip=' + zipcode)
				.then(response => {
					newMemberList.push(Object.assign(member, {projectData: response.data}));
					this.setState({membersWithData: newMemberList});
				});
		});
	};

  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
          <Content 
            memberList={this.state.members} 
            addMember={this.addMember}
            getMemberProjects={this.getMemberProjects}
          />
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;