import React from "react";

const Footer = () => {
    return(
        <div className="container fondoNegro">
            <div className="container py-5">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h3>Seguinos en nuestras redes</h3>
                    </div>
                    <div className="col-md-6 text-end ">
                        <p>
                            <a href={""} target={"_blank"} rel="noreferrer" className="me-3"><img src={"img/SM-RRSS-01.png"} alt="Twitter" width={30}/></a>
                            <a href={""} target={"_blank"} rel="noreferrer" className="me-3"><img src={"img/SM-RRSS-02.png"} alt="YouTube" width={30}/></a>
                            <a href={""} target={"_blank"} rel="noreferrer" className="me-3"><img src={"img/SM-RRSS-03.png"} alt="Instagram" width={30}/></a>
                            <a href={""} target={"_blank"} rel="noreferrer" className="me-3"><img src={"img/SM-RRSS-04.png"} alt="Facebook" width={30}/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;