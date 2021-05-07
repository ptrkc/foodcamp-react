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
    const [url, setUrl] = React.useState("http://www.globo.com");
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
                setUrl={setUrl}
            />
            <a href={url} target="_blank" rel="noreferrer">
                Tudo certo
            </a>
            <Link to="/" className="cancel">
                Cancelar
            </Link>
        </div>
    );
}
