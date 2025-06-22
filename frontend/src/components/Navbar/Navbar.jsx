import './Navbar.css';
import brainCircuitImg from '../../assets/brain-circuit.png'; // Import the image

function Navbar(){
    return(
        <nav className="navbar">
            <div className='nav-logo'>
                <img className="logo-img" src={brainCircuitImg} alt="hi" />
                <div className="logo-name">web.logo</div>
            </div>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;