import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MiNavbar } from './components/MiNavbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <MiNavbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
