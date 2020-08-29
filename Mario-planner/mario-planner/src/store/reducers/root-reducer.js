import AuthReducer from './auth-reducer';
import ProjectReducer from './project-reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer
});

export default RootReducer;