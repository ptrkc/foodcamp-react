export default function Option() {
    return (
        <li class="option">
            <img src="/img/falafel.jpg" />
            <strong>Falafel Burger</strong>
            <span class="description">Hamburger de Falafel, uma delícia.</span>
            <div>
                <span>R$ 19,90</span>
                <div class="counter">
                    <span class="remove"> - </span>
                    <span> 1 </span>
                    <span class="add"> + </span>
                </div>
            </div>
        </li>
    );
}
