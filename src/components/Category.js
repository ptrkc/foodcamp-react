import React from "react";
import Option from "./Option";

export default function Category(props) {
    const [options, setOptions] = React.useState([...props.options]);
    const [orderFood, setOrderFood] = React.useState([]);
    const [orderDrink, setOrderDrink] = React.useState([]);
    const [orderDesert, setOrderDesert] = React.useState([]);
    const type = props.type;

    function selectOption(type, id, selected) {
        if (selected) {
            return;
        } else {
            alert("once");
            if (type === "food") {
                setOrderFood([...orderFood, id]);
            } else if (type === "drink") {
                setOrderDrink([...orderDrink, id]);
            } else {
                setOrderDesert([...orderDesert, id]);
            }
        }
    }

    let title;
    let orderType;
    if (type === "food") {
        title = "Primeiro, seu prato";
        orderType = orderFood;
    } else if (type === "drink") {
        title = "Agora, sua bebida";
        orderType = orderDrink;
    } else {
        title = "Por fim, sua sobremesa";
        orderType = orderDesert;
    }
    return (
        <div className="category">
            <h2>{title}</h2>
            <ul className="options">
                {options.map((option) => {
                    return (
                        <Option
                            key={option.id}
                            option={option}
                            selected={
                                orderType.includes(option.id) ? "selected" : ""
                            }
                            selectOption={selectOption}
                            type={type}
                        />
                    );
                })}
                <div className="spacer"></div>
            </ul>
        </div>
    );
}
