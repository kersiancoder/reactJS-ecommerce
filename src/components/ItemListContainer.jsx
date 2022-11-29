import Products from '../components/Products';
import { data } from "../utils/Data"
import { useState } from "react";


const ItemListContainer = () => {
  const [datos, setDatos] = useState (data); //hook

  const deleteItem = (id) => {
    let newData = datos.filter(item => item.id !== id)
    setDatos(newData)
  }

  return (
    <>
      {
      datos.map(item => (
        <Products key={item.id} {...item}/>
      ))
    }
      </>
  )
  

}

export default ItemListContainer;