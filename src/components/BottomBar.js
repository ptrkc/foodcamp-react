import { Link } from "react-router-dom";

export default function BottomBar(props) {
    const active = !!props.isEnabled;
    return (
        <div id="bottom-bar">
            <Link
                className={active ? "enabled" : ""}
                to="/Checkout"
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
