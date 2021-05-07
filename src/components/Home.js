import React from "react";
import Content from "./Content";
import BottomBar from "./BottomBar";

export default function Home(props) {
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    function checkMinimunItems() {
        if (
            !!selectedFoodIDs.length &&
            !!selectedDrinksIDs.length &&
            !!selectedDesertsIDs.length
        ) {
            return true;
        } else {
            return false;
        }
    }
    const [buttonState, setButtonState] = React.useState(checkMinimunItems());

    return (
        <>
            <Content
                functions={[...props.functions, setButtonState]}
                states={props.states}
                menuObject={props.menuObject}
            />
            <BottomBar isEnabled={buttonState} rawSelection={props.states} />
        </>
    );
}
