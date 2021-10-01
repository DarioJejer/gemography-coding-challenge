export const LOAD_MORE_REPOS = "LOAD_MORE_REPOS";


export function LoadMoreRepos(page) {
    return (dispatch) => {
      return fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
        .then((res) => res.json())
        .then(res => { 
            const repos = formatReposData(res.items);
            dispatch({ type: LOAD_MORE_REPOS, payload: repos });
        });   
    }    
}

function formatReposData(res) {
    return res.map(r => {return { title: r.name, description: r.description, profileImg: r.owner.avatar_url }});
}