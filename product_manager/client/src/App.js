import {Route, Link, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import EditItem from './components/EditItem';

function App() {
  return (
    <div className="App">
      <h1>Store :)</h1>
      <Link to="/items">Home</Link>

      <Routes>
        {/* show one */}
        <Route path='/items/:varId' element={<Item/>}/>
        {/* edit item */}
        <Route path='/items/:varId/edit' element={<EditItem/>}/>
        {/* automatically goes to home if route unknown */}
        <Route path='*' element={<Navigate to="/items" replace/>}/>
        {/* home page */}
        <Route path='/items' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
