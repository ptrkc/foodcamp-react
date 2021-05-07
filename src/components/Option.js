import React from "react";

export default function Option(props) {
    const { id, img, name, description } = props.option;
    const price = String(props.option.price.toFixed(2)).replace(".", ",");
    const [selectOption, modifyAmount] = props.functions;
    const type = props.type;
    const [counter, setCounter] = React.useState(0);
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
                    selectOption(type, id);
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
                            modifyAmount(type, id, "remove");
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
                            modifyAmount(type, id, "add");
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
