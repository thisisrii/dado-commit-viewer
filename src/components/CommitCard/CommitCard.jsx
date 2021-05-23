import './commitcard.scss';
import placeholder from './placeholder.jpg'
import { dateFormat } from '../../utils/index';

const CommitCard = ({ commit }) => {
    console.log('commit', commit);
    return (
        <div className="commit-card">
            <div className="commit-avatar-container">
                <img src={commit.author !== null ? commit.author.avatar_url : placeholder} alt="Avatar" class="commit-avatar" />
                <span className='commit-username'>{commit.commit.author.name}</span>
            </div>
            <div className="commit-message">
                <span>{commit.commit.message}&nbsp;</span>
                {commit.author && <span>(#{commit.author.id})</span>}
            </div>
            <div className="commit-date">
                <span>{dateFormat(commit.commit.author.date)}</span>
            </div>
        </div>
    )
}

export default CommitCard;