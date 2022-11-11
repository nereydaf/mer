import {Route, Link, Routes} from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h1>Store :)</h1>
      <Link to="/items">Home</Link>

      <Routes>
        <Route path='/items/:varId' element={<Item/>}/>
      <Route path='*' element={<Navigate to="/items" replace/>}/>
      <Route path='/items' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
