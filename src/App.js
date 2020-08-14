import React from 'react';
import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/sideBar';
import Profile from './components/pages/profile/profile';
import Messages from './components/pages/messages/messages';
import News from './components/pages/news/news';
import Music from './components/pages/music/music';
import Settings from './components/pages/settings/settings';

import {Route, BrowserRouter} from 'react-router-dom';

function App(props) {
       
  return (
         
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <SideBar/>
          <Route path="/profile" 
                 render={()=><Profile 
                     profilePage={props.state.profilePage}
                     dispatch = {props.dispatch}
                     />}/>
          <Route path="/messages" 
                 render={()=><Messages 
                    dialogs={props.state.messagesPage.dialogs} 
                    messages={props.state.messagesPage.messages}/>}/>
          <Route path="/news" 
                 component={News}/>
          <Route path="/music" 
                 component={Music}/>
          <Route path="/settings" 
                 component={Settings}/>         
      </div>
    </BrowserRouter>
  );
}

export default App;
