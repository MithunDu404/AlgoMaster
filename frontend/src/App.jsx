import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Learning from './pages/Learning/Learning';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/learning" element={<Learning/>}/>
      </Routes>
    </Router>
  );
}

export default App;