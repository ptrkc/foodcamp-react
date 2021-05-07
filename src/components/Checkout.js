import React from "react";
import { Link } from "react-router-dom";
export default function Checkout() {
    return (
        <div id="checkout-box">
            <h2>Revise seu pedido</h2>
            <div className="checkout-card"></div>
            <a href="#">Tudo certo</a>
            <Link to="/"> Cancelar</Link>
        </div>
    );
}
