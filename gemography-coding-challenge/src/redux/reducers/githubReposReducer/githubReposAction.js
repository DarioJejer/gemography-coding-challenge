export const LOAD_MORE_REPOS = "LOAD_MORE_REPOS";


export function LoadMoreRepos(page) {
    return (dispatch) => {
      let date = getDateMinusAMonth();
      return fetch(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`)
        .then((res) => res.json())
        .then(res => { 
            const repos = formatReposData(res.items);
            dispatch({ type: LOAD_MORE_REPOS, payload: repos });
        });   
    }    
}

function getDateMinusAMonth() {
    let date = new Date(Date.now());
    date.setDate(date.getDate() - 30);
    date = date.toISOString().slice(0, 10);
    return date;
}

function formatReposData(res) {
    return res.map(r => {
        return { 
            title: r.name, 
            description: r.description, 
            stars: r.stargazers_count,
            issues: r.open_issues_count,
            profileImg: r.owner.avatar_url,
            userName: r.owner.login
        }
    });
}