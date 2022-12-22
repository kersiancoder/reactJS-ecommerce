import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        if(isInCart(item.id))  {
            found.qtyItem += qty;
            setCartList([...cartList]);
        }
        else {
            setCartList([...cartList,{ idItem: item.id, imgItem: item.thumbnail, costItem: item.price, titleItem: item.title, qtyItem: qty }
            ]);
        }
    }

    const isInCart = (id) => {
        return cartList.find((element) => element.idItem == id)
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, calcTotalPerItem, calcSubTotal, calcTotal, calcItemsQty}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;