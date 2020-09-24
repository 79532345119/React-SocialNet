import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMidleware from 'redux-thunk';

let reducers = combineReducers({
    messagesPage: dialogsReducer, 
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

window.store = store;

export default store;
