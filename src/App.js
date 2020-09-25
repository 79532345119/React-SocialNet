import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/header/headerContainer';
import SideBar from './components/side-bar/sideBar';
import ProfileContainer from './components/pages/profile/profileContainer';
import MessagesContainer from './components/pages/messages/messagesContainer';
import News from './components/pages/news/news';
import Music from './components/pages/music/music';
import Settings from './components/pages/settings/settings';
import UsersContainer from './components/users/usersContainer';
import Login from './components/login/login';


const App = (props) => {
     
  return (      
    
      <div className="app-wrapper">
          <HeaderContainer/>
          <SideBar/>
          <Route path="/profile/:userId?" 
                 render={()=><ProfileContainer 
                     store={props.store}
                     />}/>
          <Route path="/messages" 
                 render={()=><MessagesContainer 
                    store={props.store} 
                    />}/>
          <Route path="/news" 
                 component={News}/>
          <Route path="/music" 
                 component={Music}/>
          <Route path="/settings" 
                 component={Settings}/>
          <Route path="/users" 
                 render = {()=><UsersContainer
                     store={props.store}
                     />}/>
          <Route path="/login"
                 component={Login}/>

      </div> 
  );
}

export default App;
