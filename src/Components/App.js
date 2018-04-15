import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {ThemeProvider} from 'styled-components';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    this.state = {
      members: storedMembers,
    };

  this.addMember = this.addMember.bind(this);
  }

  addMember(member) {
    // get the state, spread it into a new array plus the new member
    const newMembers = [...this.state.members, member];
    this.setState({members: newMembers});

    // adding new state to the local storage 
    localStorage.setItem('members', JSON.stringify(newMembers));
  }

  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
          <Content 
            memberList={this.state.members} 
            addMember={this.addMember}/>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;