
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCatergory from './pages/ShopCatergory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCatergory banner={men_banner} category="men"/>}/>
        <Route path='/Womens' element={<ShopCatergory banner={women_banner} category="women" />}/>
        <Route path='/Kids' element={<ShopCatergory banner={kid_banner} category="kid"/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
