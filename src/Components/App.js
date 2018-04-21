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

    if (storedMembers) {
      this.state = {
        members: storedMembers,
      };
    } else {
      this.state = {
        members: [],
      };
    }
  
  this.addMember = this.addMember.bind(this);
  }

  // make call to donors choose, add project data to member object and
  // update state, and then update local storage with updated state 
  addMember(member) {
    axios.get('http://localhost:4545/getSnakeProjects?zip=' + member.zipcode)
    .then(response => {
      const newMember = (Object.assign(member, {projectData: response.data}));
      const updatedMembers = [...this.state.members, newMember];
      this.setState({members: updatedMembers});
      localStorage.setItem('members', JSON.stringify(updatedMembers));
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
          <Content 
            memberList={this.state.members} 
            addMember={this.addMember}
          />
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;