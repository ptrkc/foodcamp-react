import React from "react";
import { Link } from "react-router-dom";
import CheckoutSummaryCard from "./CheckoutSummaryCard";
export default function Checkout(props) {
    console.log(props);
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    const menuObject = props.menuObject;
    return (
        <div id="checkout-box">
            <h2>Revise seu pedido</h2>
            <CheckoutSummaryCard
                states={[
                    selectedFoodIDs,
                    selectedDrinksIDs,
                    selectedDesertsIDs,
                ]}
                menuObject={menuObject}
            />
            <a href="#">Tudo certo</a>
            <Link to="/" className="cancel">
                Cancelar
            </Link>
        </div>
    );
}
