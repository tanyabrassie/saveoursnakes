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
    this.state = {
      members: [],
    };

  this.addMember = this.addMember.bind(this);
  }

  addMember(member) {
    const newMembers = [...this.state.members, member];
    this.setState({members: newMembers});
  }
 
  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
          <Content addMember={this.addMember}/>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;