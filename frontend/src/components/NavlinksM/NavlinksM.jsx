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
            <ul className='list-none flex gap-3'>

                <li className='hidden md:block py-1 px-2 rounded-lg font-medium text-md bg-gray-800 hover:bg-green-600'>
                    <Link to="/">About</Link>
                </li>

                <li className='hidden md:block py-1 px-2 rounded-lg font-medium text-md bg-gray-800 hover:bg-green-600'>
                    <Link to="/learning">Learning Center</Link>
                </li>

                <li className='hidden md:block py-1 px-2 rounded-lg font-medium text-md bg-gray-800 hover:bg-green-600'>
                    <Link to="/visualize">Visualize</Link>
                </li>

                <li className='hidden md:block py-1 px-2 rounded-lg font-medium text-md bg-gray-800 hover:bg-green-600'>
                    <Link to="/">Compete</Link>
                </li>

                <li className='hidden md:block py-1 px-2 rounded-lg font-medium text-md bg-green-600'>
                    <Link to="/">Sign In</Link>
                </li>

                {!isSidebarVisible && (
                    <li className='block md:hidden py-1 px-2 rounded-lg font-medium text-md bg-gray-800 hover:bg-green-600 cursor-pointer' onClick={showSidebar}>
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