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
            <p>{title}</p>
            <ul class="options">
                <li></li>
            </ul>
        </div>
    );
}
