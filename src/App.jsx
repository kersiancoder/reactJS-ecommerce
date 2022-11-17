import MiNavbar from './components/MiNavbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <MiNavbar />
    <ItemListContainer mensaje="Hola ItemListContainer"/>
    <h1 className="titulo">Bienvenidos a la Tienda</h1>
    <Footer />
    </>
  )
}

export default App
