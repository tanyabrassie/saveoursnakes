import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {ThemeProvider} from 'styled-components';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';

const PageLayout = styled.div`
  padding: 80px 0;
`;

class App extends React.Component {
  constructor() {
    super();
    // get stored members from local storage
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    
    // set state to stored members if local storage has any members and if not, set empty state
    this.state = {
      members: storedMembers ? storedMembers : [],
    };
  
    this.addMember = this.addMember.bind(this);

  }


  // make call to donors choose, add project data to existing member object and
  // update state with new member, and then update local storage with updated state 
  addMember(member) {
    axios.get('http://localhost:4545/getSnakeProjects?zip=' + member.zipcode).then(response => {
      const newMember = Object.assign(member, { projectData: response.data });
      const updatedMembers = [...this.state.members, newMember];
      this.setState({ members: updatedMembers });
      localStorage.setItem('members', JSON.stringify(updatedMembers));
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}> 
        <div> 
          <Navbar/>
            <PageLayout>
              <Content 
                memberList={this.state.members} 
                addMember={this.addMember}
              />
            </PageLayout>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;