import Option from "./Option";

export default function Category(props) {
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
                <Option />
                <Option />
                <Option />
                <Option />
                <Option />
                <Option />
                <div class="spacer"></div>
            </ul>
        </div>
    );
}
