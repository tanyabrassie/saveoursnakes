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
      count: 0,
    };
  }
 
  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
          <Content/>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;