import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/arrayproductos.json";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos);
            })
        })
        
        promesa.then((data) => {
            console.log(data);
            setItems(data);
        })

    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-success" role="alert">
                        <p>{greeting}</p>
                    </div>
                    <ItemCount stockItems={10} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;