import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Home from './Pages/Home';
import Pagination from './Components/Pagination';


function App() {
  return (
    <div className="App">
      <Pagination/>
      <Home></Home>
    </div>
  );
}

export default App;
