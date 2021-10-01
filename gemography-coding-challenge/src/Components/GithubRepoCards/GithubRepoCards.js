import './GithubRepoCards.css';
import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import {useEffect, useState} from "react";

export default function GithubRepoCards() { 
    
    const [repos, setRepos] = useState([
            {title: "First repo", description: "This should appear at the top", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"},
            {title: "Second repo", description: "This should appear at the middle", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"},
            {title: "Third repo", description: "This should appear at the botton", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"}
        ]);

    useEffect(() => {        
        fetchData();
    },[]);
    
    async function fetchData() {
        let reposData = await fetch("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc");
        reposData = await reposData.json();
        reposData = reposData.items;
        setRepos(formatReposData(reposData));
    }

    function formatReposData(res) {
        return res.map(r => {return { title: r.name, description: r.description, profileImg: r.owner.avatar_url }});
    }

    return (
        <div>
            <GithubRepoCard title={repos[0].title} description={repos[0].description} profileImg={repos[0].profileImg}/>
            <GithubRepoCard title={repos[1].title} description={repos[1].description} profileImg={repos[1].profileImg}/>
            <GithubRepoCard title={repos[2].title} description={repos[2].description} profileImg={repos[2].profileImg}/>
        </div>
    );
  }