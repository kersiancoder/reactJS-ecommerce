
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/FirebaseConfig';


const Cart = () => {
    const ctx = useContext(CartContext);

    const createOrder = () => {
      const itemsForDB = ctx.cartList.map(item => ({
        id: item.idItem,
        title: item.titleItem,
        price: item.costItem,
        qty: item.qtyItem
      }));
  
      ctx.cartList.forEach(async (item) => {
        const itemRef = doc(db, "productos", item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      });
  
      let order = {
        buyer: {
          name: "Luis Suarez",
          email: "luis@suarez.com",
          phone: "099123456"
        },
        total: ctx.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };

      console.log(order);
      
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    
      createOrderInFirestore()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
      ctx.removeList();
      }

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
                  ctx.cartList.length > 0 &&
                  ctx.cartList.map(item => 
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        <Card className='p-3'>
                        <Card.Img variant="top" src={item.imgItem}/>
                        <Card.Body>
                        <Card.Title>{item.titleItem}</Card.Title>
                        <Card.Text>$ {item.costItem}</Card.Text>
                        <Card.Text>Cantidad: {item.qtyItem}</Card.Text>
                        <Card.Text>Costo total: $ {ctx.calcTotalPerItem(item.idItem)}</Card.Text>
                        <Button type="filled" onClick={() => ctx.deleteItem(item.idItem)}>DELETE</Button>
                        </Card.Body>
                        </Card>
                      </div>
                    </div>
                    </>
                  )
                }
                {
                  ctx.cartList.length > 0 &&
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        ORDER SUMMARY
                      <p>TOTAL: $ {ctx.calcSubTotal()}</p>
                      <Button onClick={createOrder}>CHECKOUT NOW</Button>
                      </div>
                    </div>
                    </>
                }
      </>
    );
}

export default Cart;