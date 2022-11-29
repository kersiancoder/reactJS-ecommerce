import MiNavbar from './components/MiNavbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <MiNavbar />
    <h1 className="titulo">Bienvenidos a la Tienda</h1>
    <ItemListContainer mensaje="Hola ItemListContainer"/>
    <Footer />
    </>
  )
}

export default App
