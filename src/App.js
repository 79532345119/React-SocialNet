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
import MessagesContainer from './components/pages/messages/messagesContainer';

const App = (props) => {
     
  return (
         
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <SideBar/>
          <Route path="/profile" 
                 render={()=><Profile 
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
      </div>
    </BrowserRouter>
  );
}

export default App;
