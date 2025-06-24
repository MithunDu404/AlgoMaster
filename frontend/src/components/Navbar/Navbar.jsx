import { Link } from 'react-router-dom';
import './Navbar.css';
import brainCircuitImg from '../../assets/brain-circuit.png'; // Import the image
import NavlinksM from '../NavlinksM/NavlinksM';

function Navbar(){
    return(
        <nav className="navbar">
            <div className='nav-logo'>
                <img className="logo-img" src={brainCircuitImg} alt="hi" />
                <div className="logo-name">AlgoMaster</div>
            </div>
            <NavlinksM />
        </nav>
    );
}

export default Navbar;