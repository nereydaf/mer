import './App.css';
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import AddAuthor from './components/AddAuthor';
import Main from './components/Main';
import Edit from './components/Edit';
import Author from './components/Author';


function App() {
  return (
    <div className="App">
      <h1>Authors 🐑</h1>
      <div>
        <Link to="/authors/new">Add new Author</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/authors'>Home</Link>
        <hr/>
      </div>

      <Routes>
        {/* shows all page */}
        <Route path="/authors" element={<Main/>}></Route>
        {/* add new author page */}
        <Route path="/authors/new" element={<AddAuthor/>}></Route>
        {/* edit the author  */}
        <Route path='/authors/:varId/edit' element={<Edit/>}/>
        {/* show one of the authors */}
        <Route path="/authors/:varId" element={<Author/>}></Route>
        {/* auto home page */}
        <Route path="*" element={<Navigate to="/authors" replace />}></Route>
      </Routes>
    </div>
  );
}

export default App;
