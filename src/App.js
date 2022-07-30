import './App.css';
import Home from './component/Home';
import Navbarcomp from './component/Navbarcomp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './component/Products';
function App() {
  return (
    <>
      <Navbarcomp/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/products' element = {<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
