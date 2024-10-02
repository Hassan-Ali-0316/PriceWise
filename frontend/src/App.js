import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';  
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mobiles' element={<Category category='mobiles' />} />
          <Route path='/laptops' element={<Category category='laptops' />} /> 
          <Route path='/headphones' element={<Category category='headphones' />} />
          <Route path='/earbuds' element={<Category category='earbuds' />} />  
          <Route path='/smartwatches' element={<Category category='smartwatches' />} /> 
          <Route path='/products/:productId' element={<Product />} />  {/* Updated */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
