import './App.css';
import GithubRepoCards from './Components/GithubRepoCards/GithubRepoCards';
import {useEffect} from "react";
import { LoadMoreRepos } from './redux/reducers/githubReposReducer/githubReposAction';
import { useDispatch } from "react-redux";
import NextPageButton from './Components/NextPageButton/NextPageButton';

function App() {      

  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(LoadMoreRepos(1));
  },[]);

  return (
    <div className="App">
      <GithubRepoCards/>
      <NextPageButton callback={(page)=>{dispatch(LoadMoreRepos(page))}} legend={"Load more repos"}/>
    </div>
  );
}

export default App;
