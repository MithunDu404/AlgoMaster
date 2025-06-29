import { Link } from 'react-router-dom';
import './Navbar.css';
import brainCircuitImg from '../../assets/brain-circuit.png'; // Import the image
import NavlinksM from '../NavlinksM/NavlinksM';

function Navbar(){
    return(
        <nav className="w-full py-2 px-[3%] flex justify-between items-center fixed z-50 text-aliceblue bg-gray-950/85 backdrop-blur-lg">
            <div className='flex items-center px-1 rounded-sm bg-green-600'>
                <img className="h-5 w-5 m-1" src={brainCircuitImg} alt="hi" />
                    
                <div className="text-2xl uppercase font-bold">AlgoMaster</div>
            </div>
            <NavlinksM />
        </nav>
    );
}

export default Navbar;