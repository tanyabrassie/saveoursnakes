import React from 'react';
import Footer from './Footer';
import Greeting from './Greeting';
import Navbar from './Navbar';
import styled from 'styled-components';
import theme from '../theme';
import {ThemeProvider} from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Navbar/>
          <Greeting/>
          <Footer/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;