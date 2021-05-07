import React from "react";
import Content from "./Content";
import BottomBar from "./BottomBar";

export default function Home(props) {
    return (
        <>
            <Content
                functions={props.functions}
                states={props.states}
                menuObject={props.menuObject}
            />
            <BottomBar states={props.states} />
        </>
    );
}
