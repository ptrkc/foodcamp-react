export default function Option(props) {
    const { alt, img, name, description } = props.option;
    const price = String(props.option.price.toFixed(2)).replace(".", ",");
    return (
        <li class="option">
            <div class="img-box">
                <img src={img} alt={name} />
            </div>
            <strong>{name}</strong>
            <span class="description">{description}</span>
            <div class="price-quantity">
                <span>R$ {price}</span>
                <div class="counter">
                    <span class="remove"> - </span>
                    <span> 1 </span>
                    <span class="add"> + </span>
                </div>
            </div>
        </li>
    );
}
