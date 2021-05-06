import React from "react";
import Option from "./Option";

export default function Category(props) {
    function hello() {
        alert("Hello!");
    }

    const [options, setOptions] = React.useState([...props.options]);
    let title;
    if (props.type === "food") {
        title = "Primeiro, seu prato";
    } else if (props.type === "drink") {
        title = "Agora, sua bebida";
    } else {
        title = "Por fim, sua sobremesa";
    }
    return (
        <div class="category">
            <h2>{title}</h2>
            <ul class="options">
                {options.map((option) => {
                    return <Option option={option} function={hello} />;
                })}
                <div class="spacer"></div>
            </ul>
        </div>
    );
}
