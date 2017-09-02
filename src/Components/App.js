import React from 'react';
import Footer from './Footer';
import Greeting from './Greeting';
import Navbar from './Navbar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <Navbar/>
        <Greeting/>
        <Footer/>
      </div>
    );
  }
}

export default App;