import React from "react";

const Promocion = () => {
    return (
        <div className="container-fliud fondoClaro">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-end">
                        <img src={"img/BlackFriday.png"} alt={"Pc Victus"} width={300} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div >
                            <h4>Disfruta de nuestro Balck Friday pero con descuentos exclusivos durante todo el año</h4>
                            <p ><a href={"/notebooks"} target={"_blank"} rel="noreferrer"><img src={"img/1-158.jpg"} alt= {Promocion} width= {135} /></a></p>
                            <p>Estás a un click de encontrar las mejores ofertas del mercado</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>      
    )
}

export default Promocion;