import './App.css';
import Home from './component/Home';
import Navbarcomp from './component/Navbarcomp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Login from './component/Login';
function App() {
  return (
    <>
      <Navbarcomp/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/products' element = {<Products/>}></Route>
          <Route path='/product/:id' element = {<Product/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/cart' element = {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
