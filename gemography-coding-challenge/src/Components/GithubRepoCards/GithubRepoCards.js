import './GithubRepoCards.css';
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import {useEffect, useState} from "react";

export default function GithubRepoCards() { 
    
    const [repos, setRepos] = useState([]);

    useEffect(() => {   

        fetchData();

        async function fetchData() {
            let reposData = await fetch("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc");
            reposData = await reposData.json();
            reposData = reposData.items;
            setRepos(formatReposData(reposData));
        }
    },[]);
    

    function formatReposData(res) {
        return res.map(r => {return { title: r.name, description: r.description, profileImg: r.owner.avatar_url }});
    }

    return (
        <div>
            {repos.length>0?
            repos.map(r => <GithubRepoCard title={r.title} key={r.title} description={r.description} profileImg={r.profileImg}/>)
            : <div>Loading...</div>
            }
        </div>
    );
  }