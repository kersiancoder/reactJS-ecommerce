import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/CustomFetch";
import ItemDetail from "./ItemDetail";
import { data } from "../utils/Data";
// const { data } = require('../utils/Data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;