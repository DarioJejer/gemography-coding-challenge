import { LOAD_MORE_REPOS } from "./githubReposAction";

const initialState = {
    githubRepos: []
};


const githubReposReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case LOAD_MORE_REPOS:
        return {...state, githubRepos: [...state.githubRepos, ...payload]};
      default:
        return state;
    }
  };
  export default githubReposReducer