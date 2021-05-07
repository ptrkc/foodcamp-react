import React from "react";
import { Redirect } from "react-router-dom";

export default function CheckoutSummaryCard(props) {
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    const menuObject = props.menuObject;
    const setUrl = props.setUrl;

    if (!selectedFoodIDs.length) {
        return <Redirect to="/" />;
    }

    function createItemQuantityArray(oldArray) {
        let lastNum = 0;
        const onlyUniquesArray = [];
        const ItemQuantityArray = [];
        oldArray.sort(function (a, b) {
            return a - b;
        });
        oldArray.forEach((i) => {
            if (i !== lastNum) {
                onlyUniquesArray.push(i);
                lastNum = i;
            }
        });
        onlyUniquesArray.forEach((i) => {
            const occurrences = oldArray.filter((n) => n === i).length;
            ItemQuantityArray.push([i, occurrences]);
        });
        return ItemQuantityArray;
    }

    const foodItemQuantity = createItemQuantityArray(selectedFoodIDs);
    const drinksItemQuantity = createItemQuantityArray(selectedDrinksIDs);
    const desertsItemQuantity = createItemQuantityArray(selectedDesertsIDs);

    let total = 0;

    // function RenderOrderType(props) {
    //     let categoryItemQuantity;
    //     const category = props.category;
    //     if (category === "food") {
    //         categoryItemQuantity = foodItemQuantity;
    //     } else if (category === "drinks") {
    //         categoryItemQuantity = drinksItemQuantity;
    //     } else if (category === "deserts") {
    //         categoryItemQuantity = desertsItemQuantity;
    //     }
    //     if (categoryItemQuantity.length === 0) {
    //         return null;
    //     }
    //     categoryItemQuantity.map(([id, quantity]) => {
    //         const item = menuObject[category].find(
    //             (option) => option.id === id
    //         );
    //         console.log(item.name, quantity);
    //         total += item.price * quantity;
    //         return (
    //             <div>
    //                 <span>
    //                     {item.name + (quantity > 1 ? ` (${quantity}x)` : "")}
    //                 </span>
    //                 <span>
    //                     {String((item.price * quantity).toFixed(2)).replace(
    //                         ".",
    //                         ","
    //                     )}
    //                 </span>
    //             </div>
    //         );
    //     });
    // }

    let wholeOrder = "";
    let totalPrice = "";

    function createMessage() {
        let message = `Olá, gostaria de fazer o pedido:
${wholeOrder.substring(0, wholeOrder.length - 1)}
Total: R$ ${totalPrice}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsNum = "NTUyMTk4NTUyMDc2NA==";
        let whatsUrl =
            "https://wa.me/" + atob(whatsNum) + "?text=" + encodedMessage;
        setUrl(whatsUrl);
    }

    return (
        <div className="checkout-card">
            {/* <RenderOrderType category={"food"} /> */}

            {foodItemQuantity.map(([id, quantity]) => {
                const item = menuObject["food"].find(
                    (option) => option.id === id
                );
                total += item.price * quantity;
                wholeOrder += `- Prato: ${item.name}${
                    quantity > 1 ? ` (${quantity}x)\n` : "\n"
                }`;
                return (
                    <div>
                        <span>
                            {item.name +
                                (quantity > 1 ? ` (${quantity}x)` : "")}
                        </span>
                        <span>
                            {String((item.price * quantity).toFixed(2)).replace(
                                ".",
                                ","
                            )}
                        </span>
                    </div>
                );
            })}

            {drinksItemQuantity.map(([id, quantity]) => {
                const item = menuObject["drinks"].find(
                    (option) => option.id === id
                );
                total += item.price;
                wholeOrder += `- Bebida: ${item.name}${
                    quantity > 1 ? ` (${quantity}x)\n` : "\n"
                }`;
                return (
                    <div>
                        <span>
                            {item.name +
                                (quantity > 1 ? ` (${quantity}x)` : "")}
                        </span>
                        <span>
                            {String((item.price * quantity).toFixed(2)).replace(
                                ".",
                                ","
                            )}
                        </span>
                    </div>
                );
            })}

            {desertsItemQuantity.map(([id, quantity]) => {
                const item = menuObject["deserts"].find(
                    (option) => option.id === id
                );
                total += item.price;
                wholeOrder += `- Sobremesa: ${item.name}${
                    quantity > 1 ? ` (${quantity}x)\n` : "\n"
                }`;
                totalPrice = `R$ ${String(total.toFixed(2)).replace(".", ",")}`;
                createMessage();
                return (
                    <div>
                        <span>
                            {item.name +
                                (quantity > 1 ? ` (${quantity}x)` : "")}
                        </span>
                        <span>
                            {String((item.price * quantity).toFixed(2)).replace(
                                ".",
                                ","
                            )}
                        </span>
                    </div>
                );
            })}

            <div>
                <span>TOTAL:</span>
                <span>R$ {String(total.toFixed(2)).replace(".", ",")}</span>
            </div>
        </div>
    );
}
