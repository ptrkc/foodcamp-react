import ReactDOM from "react-dom";
import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";
import React from "react";

function App() {
    const [buttonState, setButtonState] = React.useState("");
    return (
        <>
            <TopBar />
            <Content />
            <BottomBar enabled={buttonState} />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
