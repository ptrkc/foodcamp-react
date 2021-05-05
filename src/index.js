import ReactDOM from "react-dom";
import TopBar from "./TopBar.js";
import Content from "./Content";

function App() {
    return (
        <>
            <TopBar />
            <Content />
            {/* <BottomBar/> */}
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
