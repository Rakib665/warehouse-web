import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Home/Header/Header';
import Register from './pages/Register/Register';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
