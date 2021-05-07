import React from "react";
import Option from "./Option";

export default function Category(props) {
    const menu = props.menu;
    const selectedIDs = props.selectedIDs;
    const [isAbleToOrder] = props.functions;

    function selectOption(id) {
        console.log([...selectedIDs, id]);
        selectedIDs.push(id);
        isAbleToOrder();
    }
    function modifyAmount(id, action) {
        if (action === "add") {
            selectedIDs.push(id);
        } else {
            removeItem(id);
            isAbleToOrder();
        }
    }

    function removeItem(id) {
        const i = selectedIDs.indexOf(id);
        selectedIDs.splice(i, 1);
    }

    return (
        <div className="category">
            {props.children}
            <ul className="options">
                {menu.map((menuOption) => {
                    return (
                        <Option
                            key={menuOption.id}
                            menuOption={menuOption}
                            selected={
                                selectedIDs.includes(menuOption.id)
                                    ? "selected"
                                    : ""
                            }
                            functions={[selectOption, modifyAmount]}
                        />
                    );
                })}
                <div className="spacer"></div>
            </ul>
        </div>
    );
}
