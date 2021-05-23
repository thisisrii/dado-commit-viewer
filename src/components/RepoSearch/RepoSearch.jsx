
import './reposearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const RepoSearch = ({ page, onRepoSearchSubmit, onRepoSearchChange, repoName }) => {

    const handleRepoSearchSubmit = (event) => {
        event.preventDefault();
        onRepoSearchSubmit(event.target.reposearch.value);
    }

    const handleRepoSearchOnChange = (value) => {
        onRepoSearchChange(value);
    }

    return (
        <form className={`${page}-search-form`} onSubmit={handleRepoSearchSubmit}>
            <div className="search-input-container">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input className="search-input" type="text" placeholder="Eg. facebook/react" name="reposearch" value={repoName} onChange={e => handleRepoSearchOnChange(e.target.value)} />
            </div>
            <button className="search-button" type="submit">See commits 🚀</button>
        </form>
    )
}

export default RepoSearch;