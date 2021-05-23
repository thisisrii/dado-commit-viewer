import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <Link to="#">About</Link>
            <Link to="#">Contact</Link>
        </nav>
    )
}

export default Navigation;