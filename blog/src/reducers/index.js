import {combineReducers} from 'redux';
import postReducers from './postReducers';
import usersReducers from './usersReducer';

export default combineReducers({
    posts: postReducers,
    users: usersReducers
});