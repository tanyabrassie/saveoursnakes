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
      members: '',
    };

  this.addMember = this.addMember.bind(this);
  }

  addMember(member) {
    console.log(member);
    this.setState(member);
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