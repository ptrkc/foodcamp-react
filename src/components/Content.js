import Category from ". /Category";

export default function Content() {
    const foodArray = [
        {
            id: 1,
            img: "img/pizza.jpg",
            name: "Pizza do Futuro",
            description: "Sabor calabresa vegetal da Fazenda Futuro, 30cm.",
            price: 29.9,
        },
        {
            id: 2,
            img: "img/guacamole.jpg",
            name: "Mexicano",
            description: "Porção de nachos e guacamole picante.",
            price: 21.9,
        },
        {
            id: 3,
            img: "img/falafel.jpg",
            name: "Falafel Burger",
            description: "Hamburger de falafel, acompanha batata.",
            price: 27.9,
        },
        {
            id: 4,
            img: "img/batata.jpg",
            name: "Batata Frita",
            description: "Quem não curte umas batatinhas?",
            price: 15.9,
        },
        {
            id: 5,
            img: "img/bolinho-aipim.jpg",
            name: "Bolinho de Aipim",
            description: "Recheado com carne de jaca.",
            price: 21.9,
        },
    ];
    const drinkArray = [
        {
            id: 1,
            img: "img/coca.jpg",
            name: "Coca-Cola",
            description: "Lata 350ml.",
            price: 5.9,
        },
        {
            id: 2,
            img: "img/guarana.jpg",
            name: "Guaraná",
            description: "Lata 350ml.",
            price: 4.9,
        },
        {
            id: 3,
            img: "img/heineken.jpg",
            name: "Heineken",
            description: "Long Neck Garrafa 330ml.",
            price: 7.9,
        },
        {
            id: 4,
            img: "img/agua.jpg",
            name: "Água mineral",
            description: "Garrafa 500ml.",
            price: 3.5,
        },
        {
            id: 5,
            img: "img/agua-gas.jpg",
            name: "Água mineral com gás",
            description: "Garrafa 500ml.",
            price: 3.5,
        },
    ];
    const desertArray = [
        {
            id: 1,
            img: "img/cookie.jpg",
            name: "Cookie",
            description: "Clássico cookie com gotas de chocolate.",
            price: 7.9,
        },
        {
            id: 2,
            img: "img/brownie.jpg",
            name: "Brownie",
            description: "Casquinha crocante, macio por dentro.",
            price: 7.9,
        },
        {
            id: 3,
            img: "img/churros.jpg",
            name: "Mini Churros",
            description: "Porção, cobertos com açúcar e canela.",
            price: 7.9,
        },
        {
            id: 4,
            img: "img/acai.jpg",
            name: "Açaí",
            description: "Tigela de 500ml.",
            price: 14.9,
        },
        {
            id: 5,
            img: "img/salada-frutas.jpg",
            name: "Salada de Frutas",
            description: "Frescas e refrescantes.",
            price: 3.5,
        },
    ];
    return (
        <div id="content">
            <Category type="food" options={foodArray} />
            <Category type="drink" options={drinkArray} />
            <Category type="desert" options={desertArray} />
        </div>
    );
}
