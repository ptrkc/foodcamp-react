import { Link } from "react-router-dom";

export default function BottomBar(props) {
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    let active;
    if (
        !!selectedFoodIDs.length &&
        !!selectedDrinksIDs.length &&
        !!selectedDesertsIDs.length
    ) {
        active = true;
    } else {
        active = false;
    }

    return (
        <div id="bottom-bar">
            <Link
                className={active ? "enabled" : ""}
                to="/revisar"
                onClick={active ? (e) => e : (e) => e.preventDefault()}
            >
                {active ? (
                    <>Fechar pedido</>
                ) : (
                    <>
                        Selecione os 3 itens <br /> para fechar o pedido
                    </>
                )}
            </Link>
        </div>
    );
}
