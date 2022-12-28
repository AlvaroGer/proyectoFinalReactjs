import React from "react";
import ItemCount from "./ItemCount";

const ItemDeatail = ({item}) => {
    return (

        <div className="row text-center my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>USD {item.precio}</b></p>
                <ItemCount stockItems={item.stock} />
            </div>
            
        </div>
    )
}

export default ItemDeatail;