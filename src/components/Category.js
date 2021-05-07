import React from "react";
import Option from "./Option";

export default function Category(props) {
    const menu = props.menu;
    const selectedIDs = props.selectedIDs;
    const setSelectedIDs = props.setSelectedIDs;

    function selectOption(id) {
        console.log([...selectedIDs, id]);
        setSelectedIDs([...selectedIDs, id]);
    }
    function modifyAmount(id, action) {
        if (action === "add") {
            setSelectedIDs([...selectedIDs, id]);
        } else {
            removeItem(id);
        }
    }

    function removeItem(id) {
        const newArr = [...selectedIDs];
        const i = newArr.indexOf(id);
        newArr.splice(i, 1);
        setSelectedIDs([...newArr]);
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
                            selectedIDs={selectedIDs}
                        />
                    );
                })}
                <div className="spacer"></div>
            </ul>
        </div>
    );
}
