export default function Option(props) {
    const { alt, img, name, description, price } = props.option;
    return (
        <li class="option">
            <div class="img-box">
                <img src={img} alt={alt} />
            </div>
            <strong>{name}</strong>
            <span class="description">{description}</span>
            <div class="price-quantity">
                <span>{price}</span>
                <div class="counter">
                    <span class="remove"> - </span>
                    <span> 1 </span>
                    <span class="add"> + </span>
                </div>
            </div>
        </li>
    );
}
