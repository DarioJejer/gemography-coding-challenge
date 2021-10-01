import './GithubRepoCards.css';
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import { useSelector } from "react-redux";


export default function GithubRepoCards() { 
    
    const repos = useSelector(state => state.githubReposReducer.githubRepos)

    if(repos.length>0){
        return (
            <div>
                {repos.map(r => <GithubRepoCard repo={r} key={r.title} />)}
            </div>
        );
    }
    return <div>Loading...</div>;
  }