import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import RepoSearch from "../../components/RepoSearch/RepoSearch";
import './explorer.scss';
import { APIService } from '../../services/base.service';
import CommitCard from '../../components/CommitCard/CommitCard';

const Explorer = () => {
    const location = useLocation();
    const searchQuery = location?.state?.searchQuery;
    const [query, setQuery] = useState(searchQuery);
    const [search, setSearch] = useState(searchQuery);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [commits, setCommits] = useState([]);

    const onRepoSearchSubmit = (value) => {
        setQuery(value)

    }

    const onRepoSearchChange = (search) => {
        setSearch(search);
    }

    useEffect(() => {
        getCommitsbyRepo(query)
    }, [query])

    async function getCommitsbyRepo(query) {
        try {
            setIsLoading(true);
            const response = await APIService.getCommits(query);
            setIsLoading(false);
            setIsError(false);
            setCommits(response.data);
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
            setCommits([]);
            console.error('error', e);
        }
    }

    return (
        <div className="main">
            <div className='explorer-header-container'>
                <header className='explorer-header'>
                    <Logo />
                    <RepoSearch page="explorer" onRepoSearchSubmit={onRepoSearchSubmit} onRepoSearchChange={onRepoSearchChange} repoName={search} />
                </header>
            </div>
            <section className='explorer-title'>
                <h2>{query}</h2>
            </section>
            {isLoading && <div className='explorer-loading'><p>Loading...</p></div>}
            {isError && <div className="explorer-error"><p>Repo not found.</p></div>}
            {commits.length > 0 && <section className="commit-container">
                {commits.map((commit) =>
                    <CommitCard key={commit.sha} commit={commit} />
                )}
            </section>}
        </div>

    );
}

export default Explorer