export default function Option(props) {
    const { id, img, name, description } = props.option;
    const price = String(props.option.price.toFixed(2)).replace(".", ",");
    const [selectOption, modifyAmount] = props.functions;
    const selected = !!props.selected;
    const type = props.type;
    function select(selected) {}
    return (
        <li
            className={"option " + props.selected}
            onClick={() => selectOption(type, id, selected)}
        >
            <div className="img-box">
                <img src={img} alt={name} />
            </div>
            <strong>{name}</strong>
            <span className="description">{description}</span>
            <div className="price-quantity">
                <span>R$ {price}</span>
                <div className={"counter " + (selected ? "" : "hidden")}>
                    <span
                        className="remove"
                        onClick={() => modifyAmount(type, id, "remove")}
                    >
                        {" "}
                        -{" "}
                    </span>
                    <span> 1 </span>
                    <span
                        className="add"
                        onClick={() => modifyAmount(type, id, "add")}
                    >
                        {" "}
                        +{" "}
                    </span>
                </div>
            </div>
        </li>
    );
}
