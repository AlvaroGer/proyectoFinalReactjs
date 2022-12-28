import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDeatail from "./ItemDetail";
import arrayProductos from "./json/arrayproductos.json";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} =  useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve) => {

            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000)
        })

        promesa.then((data) => {
            setItem(data);
        })

    }, [id])

    return (
        <div className="container">
            <ItemDeatail item={item} />
        </div>
    )
}

export default ItemDetailContainer;