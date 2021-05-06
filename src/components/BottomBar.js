export default function BottomBar(props) {
    function ButtonText() {
        if (!!props.enabled) {
            return <>Fechar pedido</>;
        } else {
            return (
                <>
                    Selecione os 3 itens <br /> para fechar o pedido
                </>
            );
        }
    }
    return (
        <div id="bottom-bar">
            <button className={!!props.enabled ? "enabled" : ""}>
                <ButtonText />
            </button>
        </div>
    );
}
