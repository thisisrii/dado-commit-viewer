import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import RepoSearch from '../../components/RepoSearch/RepoSearch';
import TrendingRepos from '../../components/TrendingRepos/TrendingRepos';
import { APIService } from '../../services/base.service';
import './home.scss';

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [query, setQuery] = useState('');
    const history = useHistory();

    useEffect(() => {
        getTrendingRepos();
    }, [])

    async function getTrendingRepos() {
        try {
            const response = await APIService.getTrendingReposOffline();
            setTrending(response.data.items);
        } catch (e) {
            console.error('Error', e);
        }
    }

    const onRepoSearchSubmit = (value) => {
        console.log('onRepoSearchSubmit', value);
        if (value && query.trim() !== "")
            history.push("/commits", { searchQuery: value });
    }

    const onRepoSearchChange = (query) => {
        setQuery(query);
    }

    const onSelectTrendingRepo = (query) => {
        setQuery(query)
        history.push("/commits", { searchQuery: query });
    }

    return <div className="main">
        <header className="home-header">
            <Logo />
            <Navigation />
        </header>
        <section>
            <div className="headline-container">
                <h1>Discover the world of code</h1>
            </div>
            <div className="subline-container">
                <h3>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</h3>
            </div>
        </section>
        <section className="search-container">
            <RepoSearch page="home" onRepoSearchSubmit={onRepoSearchSubmit} onRepoSearchChange={onRepoSearchChange} repoName={query} />
        </section>
        <div className="subtext-container">
            <p>Or pick one of these suggested repos</p>
        </div>
        <TrendingRepos trending={trending} onSelectTrendingRepo={onSelectTrendingRepo} />
    </div>
}

export default Home;