import './GithubRepoCards.css';
import { useDispatch, useSelector } from "react-redux";
import { LoadMoreRepos } from '../../redux/reducers/githubReposReducer/githubReposAction';
import { useEffect } from "react";
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import NextPageButton from '../NextPageButton/NextPageButton';

export default function GithubRepoCards() { 
    
    const dispatch = useDispatch();

    useEffect(() => {   
        dispatch(LoadMoreRepos(1));
    },[]);
    
    const repos = useSelector(state => state.githubReposReducer.githubRepos)

    if(repos.length>0){
        return (
            <div>
                {repos.map(r => <GithubRepoCard repo={r} key={r.title} />)}
                <NextPageButton callback={(page)=>{dispatch(LoadMoreRepos(page))}} legend={"Load more repos"}/>
            </div>
        );
    }
    return <div>Loading...</div>;
  }