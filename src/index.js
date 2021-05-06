import ReactDOM from "react-dom";
import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";

function App() {
    return (
        <>
            <TopBar />
            <Content />
            <BottomBar />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
