import React from "react";

const Card = () => {
    return (
        <>
            {/* style={{marginRight: spacing + 'em'}} */}
            <div className="card bg-primary text-white" style={{ width: "18rem", color: "black" }}>
                <img src="https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1" className="card-img-top" alt="gatito" />
                <div className="card-body ">
                    <h5 className="card-title">💟Gatito Atigrado💟</h5>
                    <p className="card-text">Hola soy Figaro tengo 2 meses de edad cuento con mis vacunas y papeles al dia y mucho amor para dar. </p>
                    <a href="#" className="btn btn-light">Adoptar</a>
                </div>
            </div>

        </>

    )
}
export default Card