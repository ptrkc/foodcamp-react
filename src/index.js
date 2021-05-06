import ReactDOM from "react-dom";
import React from "react";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import "./css/reset.css";
import "./css/styles.css";

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
