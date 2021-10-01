import './GithubRepoCard.css';

export default function GithubRepoCard(props) { 
  
    const {title, description, profileImg} = props;
    
    return (
        <div className="box">
            <h3>{title}</h3>
            <img src={profileImg} alt="user-profile" className="image-box" />            
            <h3>{description}</h3>
        </div>
    );
  }