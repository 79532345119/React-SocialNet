import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import './App.css';
import './utils/styleNone.css'
import HeaderContainer from './components/header/headerContainer';
import SideBar from './components/side-bar/sideBar';
import ProfileContainer from './components/pages/profile/profileContainer';
import News from './components/pages/news/news';
import Music from './components/pages/music/music';
import Settings from './components/pages/settings/settings';
import UsersContainer from './components/users/usersContainer';
import Login from './components/login/login';

//import MessagesContainer from './components/pages/messages/messagesContainer';
const MessagesContainer = React.lazy(() => import('./components/pages/messages/messagesContainer'));

const App = (props) => {
     
  return (      
    
      <div className="app-wrapper">
          <HeaderContainer/>
          <SideBar/>
          <Switch>
              <Route exact path="/"
                     render={()=> <Redirect to={"/profile"} /> } />
              <Route path="/profile/:userId?" 
                     render={()=><ProfileContainer 
                         store={props.store}/>
                  }/>
              <Route path="/messages" 
                     render={()=> {
                         return (<div>
                                  <Suspense fallback={<div>Загрузка...</div>}>
                                    <MessagesContainer store={props.store}  />
                                  </Suspense>
                                </div>);
                     } 
                  }/>
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
           </Switch>

      </div> 
  );
}

export default App;
