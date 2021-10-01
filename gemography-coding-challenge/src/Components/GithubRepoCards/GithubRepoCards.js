import GithubRepoCard from '../GithubRepoCard/GithubRepoCard';
import './GithubRepoCards.css';

export default function GithubRepoCards() { 
    
    let repos = [
        {title: "First repo", description: "This should appear at the top", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"},
        {title: "Second repo", description: "This should appear at the middle", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"},
        {title: "Third repo", description: "This should appear at the botton", profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"}
    ];

    return (
        <div>
            <GithubRepoCard title={repos[0].title} description={repos[0].description} profileImg={repos[0].profileImg}/>
            <GithubRepoCard title={repos[1].title} description={repos[1].description} profileImg={repos[1].profileImg}/>
            <GithubRepoCard title={repos[2].title} description={repos[2].description} profileImg={repos[2].profileImg}/>
        </div>
    );
  }