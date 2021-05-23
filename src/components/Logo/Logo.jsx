import './logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link className="logo" to="/home">CommitViewer</Link>
    );
}

export default Logo;