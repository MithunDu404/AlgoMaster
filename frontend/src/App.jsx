import './App.css';
import Navbar from './components/navbar/Navbar';
// import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Dashboar/> */}
      <div className="app">
        <h1>Hello, React!</h1>
        <p>This is a clean slate React projectgg.</p>
      </div>
    </>
  );
}

export default App;