import Products from './Items';
import { data } from "../utils/Data"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ItemListContainer = () => {
  const [products, setProducts] = useState (data); //hook

const ProductCategory = (CategoryId) => {
    let newProducts = products.filter(product => product.category == category)
    setProducts(newProducts)
}

    return (
        <>
        <Row xs={1} sm={2} md={3} lg={4} className="m-3 p-3">
            {
            products.map(product => (<Products key={product.id} {...product}/>))
            }
    </Row>
        </>
    )
}

export default ItemListContainer;