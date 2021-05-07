import React from "react";
import Option from "./Option";

export default function Category(props) {
    const options = props.options;
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.arrays;
    const [isAbleToOrder] = props.functions;
    const type = props.type;

    function selectOption(type, id) {
        const selectedTypeIDs = getSelectionType(type);
        console.log([...selectedTypeIDs, id]);
        selectedTypeIDs.push(id);
        isAbleToOrder();
    }
    function modifyAmount(type, id, action) {
        const selectedTypeIDs = getSelectionType(type);
        if (action === "add") {
            selectedTypeIDs.push(id);
        } else {
            removeItem(type, id);
            isAbleToOrder();
        }
    }

    function removeItem(type, id) {
        const selectedTypeIDs = getSelectionType(type);
        const i = selectedTypeIDs.indexOf(id);
        selectedTypeIDs.splice(i, 1);
    }

    function getSelectionType(type) {
        if (type === "food") {
            return selectedFoodIDs;
        } else if (type === "drink") {
            return selectedDrinksIDs;
        } else {
            return selectedDesertsIDs;
        }
    }
    //const typeRendering = getSelectionType(type);
    return (
        <div className="category">
            {props.children}
            <ul className="options">
                {options.map((option) => {
                    return (
                        <Option
                            key={option.id}
                            option={option}
                            selected={
                                getSelectionType(type).includes(option.id)
                                    ? "selected"
                                    : ""
                            }
                            functions={[selectOption, modifyAmount]}
                            type={type}
                        />
                    );
                })}
                <div className="spacer"></div>
            </ul>
        </div>
    );
}
