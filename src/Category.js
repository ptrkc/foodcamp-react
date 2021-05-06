import React from "react";
import Option from "./Option";

export default function Category(props) {
    const foodArray = [
        {
            img: "img/pizza.jpg",
            alt: "Pizza do Futuro",
            name: "Pizza do Futuro",
            description: "Sabor calabresa vegetal da Fazenda Futuro, 30cm.",
            price: "R$ 29,90",
        },
        {
            img: "img/guacamole.jpg",
            alt: "Nachos com Guacamole",
            name: "Mexicano",
            description: "Porção de nachos e guacamole picante.",
            price: "R$ 21,90",
        },
        {
            img: "img/falafel.jpg",
            alt: "Hamburger de Falafel",
            name: "Falafel Burger",
            description: "Hamburger de falafel, acompanha batata.",
            price: "R$ 27,90",
        },
        {
            img: "img/batata.jpg",
            alt: "Batata Frita",
            name: "Batata Frita",
            description: "Quem não curte umas batatinhas?",
            price: "R$ 15,90",
        },
        {
            img: "img/bolinho-aipim.jpg",
            alt: "Bolinho de Aipim",
            name: "Bolinho de Aipim",
            description: "Recheado com carne de jaca.",
            price: "R$ 21,90",
        },
    ];
    const [options, setOptions] = React.useState(foodArray);
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
                    return <Option option={option} />;
                })}
                <div class="spacer"></div>
            </ul>
        </div>
    );
}
