import './GithubRepoCard.css';

export default function GithubRepoCard({repo}) { 
  
    const {title, description, stars, issues, profileImg, userName} = repo;

    return (
        <div className="box">
            <span className="card-title">{title}</span>
            <img src={profileImg} alt="user-profile" className="image-box" />            
            <span className="card-description">{description}</span>
            <span className="card-stars">Stars: {stars}</span>
            <span className="card-issues">Issues: {issues}</span>
            <span className="card-username">Submited last month by {userName}</span>
        </div>
    );
  }