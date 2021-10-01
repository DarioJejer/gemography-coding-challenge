import { useState } from 'react';
import './NextPageButton.css';

export default function NextPageButton({callback, legend}) {      
    
    const [page, setPage] = useState(1);

    const handleLoadMoreRepos = () => {
        callback(page+1);
        setPage(page+1);
    }

    return (
        <button className="next-page-button" onClick={handleLoadMoreRepos}>{legend}</button>
    );
}
  