import { combineReducers } from 'redux';
import githubReposReducer from "./reducers/githubReposReducer/githubReposReducer";

const rootReducer = combineReducers({  
    githubReposReducer
});
  
export default rootReducer;
