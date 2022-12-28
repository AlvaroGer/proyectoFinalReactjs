import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-reset text-center">
            <div clasName="card border border-0" >
                <img src={item.imagen} clasName="card-img-top" alt={item.nombre} width= {300} />
                <div clasName="card-body text-center">
                    <p clasName="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;