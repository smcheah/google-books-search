import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav className="layout-medium">
            <h2>Google Books</h2>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </nav>
    );
};

export default NavBar;