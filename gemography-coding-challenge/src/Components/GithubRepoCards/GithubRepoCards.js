import './GithubRepoCards.css';
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import {useEffect, useState} from "react";
import { LoadMoreRepos } from '../../redux/reducers/githubReposReducer/githubReposAction';
import { useSelector, useDispatch } from "react-redux";


export default function GithubRepoCards() { 
    
    const dispatch = useDispatch();
    const repos = useSelector(state => state.githubReposReducer.githubRepos)

    useEffect(() => {   
        dispatch(LoadMoreRepos(1));
    },[]);
    
    if(repos.length>0){
        return (
            <div>
                {repos.map(r => <GithubRepoCard title={r.title} key={r.title} description={r.description} profileImg={r.profileImg}/>)}
            </div>
        );
    }
    return <div>Loading...</div>;
  }