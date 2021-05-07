import React from "react";
import Option from "./Option";

export default function Category(props) {
    const [options, setOptions] = React.useState([...props.options]);
    const [selectedFoodIDs, setSelectedFoodIDs] = React.useState([]);
    const [selectedDrinksIDs, setSelectedDrinksIDs] = React.useState([]);
    const [selectedDesertsIDs, setSelectedDesertsIDs] = React.useState([]);
    const type = props.type;

    function selectOption(type, id) {
        const selectedTypeIDs = getSelectionType(type);
        const setSelectedTypeIDs = getSetSelectionType(type);
        console.log([...selectedTypeIDs, id]);
        setSelectedTypeIDs([...selectedTypeIDs, id]);
    }
    function modifyAmount(type, id, action) {
        const selectedTypeIDs = getSelectionType(type);
        const setSelectedTypeIDs = getSetSelectionType(type);
        if (action === "add") {
            setSelectedTypeIDs([...selectedTypeIDs, id]);
        } else {
            removeItem(type, id);
        }
    }

    function removeItem(type, id) {
        const selectedTypeIDs = getSelectionType(type);
        const setSelectedTypeIDs = getSetSelectionType(type);
        const i = selectedTypeIDs.indexOf(id);
        const newArray = [...selectedTypeIDs];
        newArray.splice(i, 1);
        setSelectedTypeIDs([...newArray]);
        selectedTypeIDs.indexOf(id);
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
    function getSetSelectionType(type) {
        if (type === "food") {
            return setSelectedFoodIDs;
        } else if (type === "drink") {
            return setSelectedDrinksIDs;
        } else {
            return setSelectedDesertsIDs;
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
                            functions={[
                                selectOption,
                                modifyAmount,
                                getSelectionType,
                            ]}
                            type={type}
                        />
                    );
                })}
                <div className="spacer"></div>
            </ul>
        </div>
    );
}
