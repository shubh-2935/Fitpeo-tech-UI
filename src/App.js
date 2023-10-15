import './App.css';
import Header from './components/header';
import Maindashboard from './components/maindashboard';
import Leftnavbar from './components/leftnavbar';
function App() {
  return (
    <div className='main-div'>
      <div className='left-navbar'>
        <Leftnavbar />
      </div>
      <div className='right-dashboard'>
        <Header />
        <Maindashboard />
      </div>
    </div>

  );
}

export default App;
