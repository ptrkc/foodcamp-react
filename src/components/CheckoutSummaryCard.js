import React from "react";

export default function CheckoutSummaryCard(props) {
    console.log(props);
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    const menuObject = props.menuObject;
    selectedFoodIDs.sort(function (a, b) {
        return a - b;
    });
    selectedDrinksIDs.sort(function (a, b) {
        return a - b;
    });
    selectedDesertsIDs.sort(function (a, b) {
        return a - b;
    });
    return (
        <div className="checkout-card">
            {selectedFoodIDs.map((id) => {
                const item = menuObject.food.find(
                    (element) => element.id === id
                );
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
            {selectedDrinksIDs.map((id) => {
                const item = menuObject.drinks.find(
                    (element) => element.id === id
                );
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
            {selectedDesertsIDs.map((id) => {
                const item = menuObject.deserts.find(
                    (element) => element.id === id
                );
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
        </div>
    );
}
