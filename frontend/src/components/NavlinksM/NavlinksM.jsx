import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavlinksM.css';
import Sidebar from '../NavlinksS/NavlinksS.jsx'

function NavlinksM(){
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => {
        setIsSidebarVisible(true);
    };

    const hideSidebar = () => {
        setIsSidebarVisible(false);
    };
    return(
        <>
            <ul className='nav-links'>
                <li className='menu-links'><Link to="/">About</Link></li>
                <li className='menu-links'><Link to="/learning">Learning Center</Link></li>
                <li className='menu-links'><Link to="/visualize">Visualize</Link></li>
                <li className='menu-links'><Link to="/">Compete</Link></li>
                <li className='menu-links'><Link to="/">Sign In</Link></li>
                {!isSidebarVisible && (
                    <li className='menu' onClick={showSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </li>
                )}
            </ul>

            {isSidebarVisible && <Sidebar onClose={hideSidebar} />}
        </>
    );
}

export default NavlinksM;