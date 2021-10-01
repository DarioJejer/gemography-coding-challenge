import './GithubRepoCards.css';
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import { useSelector } from "react-redux";


export default function GithubRepoCards() { 
    
    const repos = useSelector(state => state.githubReposReducer.githubRepos)

    if(repos.length>0){
        return (
            <div>
                {repos.map(r => <GithubRepoCard title={r.title} key={r.title} description={r.description} profileImg={r.profileImg}/>)}
            </div>
        );
    }
    return <div>Loading...</div>;
  }