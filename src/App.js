import './App.css';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import { asyncGetItems } from './asyncAction/catalog';
import { asyncGetCart } from './asyncAction/cart';
import { asyncGetFavorites } from './asyncAction/favorites';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(asyncGetItems())
    dispatch(asyncGetCart())
    dispatch(asyncGetFavorites())
  },[])
  console.log('произошел рендер')
  return (
    <BrowserRouter>
      <div className="App">
          <div className='wrapper'>
            <Header setCartOpen={setCartOpen}/>
            {
            cartOpen && <Cart setCartOpen={setCartOpen}/> 
            }
            <Routes>
              <Route path='/' element={<Navigate to='/catalog' />}/>
              <Route path='/catalog' element = {<Catalog/>} />
              <Route path='/favorites' element = {<Favorites/>} />
            </Routes>    
          </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
