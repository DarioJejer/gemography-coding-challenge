import './GithubRepoCard.css';

export default function GithubRepoCard({repo}) { 
  
    const {title, description, stars, issues, profileImg, userName} = repo;

    return (
        <div className="box">
            <h3>{title}</h3>
            <img src={profileImg} alt="user-profile" className="image-box" />            
            <p>{description}</p>
            <p>{stars}</p>
            <p>{issues}</p>
            <p>{userName}</p>
        </div>
    );
  }