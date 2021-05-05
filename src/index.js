import ReactDOM from "react-dom";
import TopBar from "./TopBar.js";

function App() {
    return (
        <>
            <TopBar />
            {/* <Content/> */}
            {/* <BottomBar/> */}
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
