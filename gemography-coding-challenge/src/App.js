import './App.css';
import GithubRepoCards from './Components/GithubRepoCards/GithubRepoCards';
import {useEffect} from "react";
import { LoadMoreRepos } from './redux/reducers/githubReposReducer/githubReposAction';
import { useDispatch } from "react-redux";

function App() {      

  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(LoadMoreRepos(1));
  },[]);

  return (
    <div className="App">
      <GithubRepoCards/>
      <button onClick={handleLoadMoreRepos}>Load more repos</button>
    </div>
  );
}

export default App;
