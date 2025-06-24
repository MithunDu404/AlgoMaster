import { Link } from 'react-router-dom';
import './NavlinksS.css';

function NavlinksS({ onClose }) {
    return (
            <ul className='side-links'>
                <li className="close-icon" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg></li>
                <li><Link to="/" onClick={onClose}>About</Link></li>
                <li><Link to="/learning" onClick={onClose}>Learning Center</Link></li>
                <li><Link to="/" onClick={onClose}>Visualize</Link></li>
                <li><Link to="/" onClick={onClose}>Compete</Link></li>
                <li><Link to="/" onClick={onClose}>Sign In</Link></li>
            </ul>
    );
}

export default NavlinksS;
