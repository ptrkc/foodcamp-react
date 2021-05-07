import React from "react";

export default function Option(props) {
    const { id, img, name, description } = props.menuOption;
    const price = String(props.menuOption.price.toFixed(2)).replace(".", ",");
    const [selectOption, modifyAmount] = props.functions;
    const selectedIDs = props.selectedIDs;
    // selectedIDs = [1,1,2,3]
    // id = 1
    function checkCounter() {
        let counter = 0;
        selectedIDs.forEach((selected) => {
            if (selected === id) counter++;
        });
        return counter;
    }

    const [counter, setCounter] = React.useState(checkCounter());
    const selected = !!counter;
    function addItem() {
        setCounter(counter + 1);
    }
    function removeItem() {
        setCounter(counter - 1);
    }
    return (
        <li
            className={"option " + (selected ? "selected" : "")}
            onClick={() => {
                if (selected) {
                    return;
                } else {
                    selectOption(id);
                    addItem();
                }
            }}
        >
            <div className="img-box">
                <img src={img} alt={name} />
            </div>
            <strong>{name}</strong>
            <span className="description">{description}</span>
            <div className="price-quantity">
                <span>R$ {price}</span>
                <div className={"counter " + (selected ? "" : "hidden")}>
                    <span
                        className="remove"
                        onClick={() => {
                            modifyAmount(id, "remove");
                            removeItem();
                        }}
                    >
                        {" "}
                        -{" "}
                    </span>
                    <span> {counter} </span>
                    <span
                        className="add"
                        onClick={() => {
                            modifyAmount(id, "add");
                            addItem();
                        }}
                    >
                        {" "}
                        +{" "}
                    </span>
                </div>
            </div>
        </li>
    );
}
