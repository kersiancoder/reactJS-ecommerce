import React from 'react'
import ReactDOM from 'react-dom/client'
import MiNavbar from './components/MiNavbar'
import ItemListContainer from './components/ItemListContainer'
import App from './App'
import Footer from './Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiNavbar />
    <ItemListContainer mensaje="Hola ItemListContainer"/>
    <App />
    <Footer />
  </React.StrictMode>
)
