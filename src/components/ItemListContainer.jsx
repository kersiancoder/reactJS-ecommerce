import customFetch from "../utils/customFetch";
import { data } from "../utils/Data"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';
// const { data } = require('../utils/Data');




const ItemListContainer = () => {
  const [products, setProducts] = useState ([]); //hook
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
    customFetch(2000, data.filter(item => {
        if (idCategory === undefined) return item;
        return item.idCategory === parseInt(idCategory)
    }))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
}, [products]);


    return (
        <ItemList items={products} />
    )
}

export default ItemListContainer;