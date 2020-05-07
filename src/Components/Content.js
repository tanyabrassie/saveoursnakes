import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home/index';
import SnakesInNeed from './SnakesInNeed/index';
import Directory from './Directory/index';

const Content = (props) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home 
          addMember={props.addMember}
          memberList={props.memberList}
        />
      </Route>
      <Route exact path='/snakes-in-need' component={SnakesInNeed}/>
      <Route exact path='/savior-directory'>
        <Directory 
          memberList={props.memberList}
        />
      </Route>
    </Switch>
  );	
};

export default Content;