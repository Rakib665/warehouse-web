import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Home/Header/Header';
import Register from './pages/Register/Register';
import Update from './pages/Update/Update';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';


function App() {
  // const shouldRedirect = true
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
           
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
      </Routes>

    </div>
  );
}

export default App;
