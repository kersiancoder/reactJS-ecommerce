
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import CartItem from "./CartItem";


const Cart = () => {
    const ctx = useContext(CartContext);

    return (
      <>
            YOUR CART
            
                <Link to='/'>CONTINUE SHOPPING</Link>
                {
                    (ctx.cartList.length > 0)
                    ? <Button onClick={ctx.removeList}>DELETE ALL PRODUCTS</Button>
                    : <p>Your cart is empty</p>
                }
                {
                    ctx.cartList.length > 0 
                    ? ctx.cartList.map(item => 
                      <>
                    <div className='product-cart'>
                    <CartItem key={item.idItem} id={item.idItem} title={item.titleItem} price={item.costItem} thumbnail={item.imgItem}>
                    <p>Cantidad: {item.qtyItem}</p>
                    <p>lala</p>
                    <Button type="filled" onClick={() => ctx.deleteItem(item.idItem)}>DELETE</Button>
                    </CartItem>
                    </div>
                    </>
                    )
                    : <p></p>
                }
      </>
    );
}

export default Cart;