import Category from "./Category";

export default function Content(props) {
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
    ] = props.states;
    const menuObject = props.menuObject;
    const [
        setSelectedFoodIDs,
        setSelectedDrinksIDs,
        setSelectedDesertsIDs,
        setButtonState,
    ] = props.functions;
    function isAbleToOrder() {
        if (
            !!selectedFoodIDs.length &&
            !!selectedDrinksIDs.length &&
            !!selectedDesertsIDs.length
        ) {
            setButtonState(true);
        } else {
            setButtonState(false);
        }
    }

    return (
        <div id="content">
            <Category
                menu={menuObject.food}
                selectedIDs={selectedFoodIDs}
                functions={[...props.functions, isAbleToOrder]}
            >
                <h2>Primeiro, seu prato</h2>
            </Category>
            <Category
                menu={menuObject.drinks}
                selectedIDs={selectedDrinksIDs}
                functions={[...props.functions, isAbleToOrder]}
            >
                <h2>Agora, sua bebida</h2>
            </Category>
            <Category
                menu={menuObject.deserts}
                selectedIDs={selectedDesertsIDs}
                functions={[...props.functions, isAbleToOrder]}
            >
                <h2>Por fim, sua sobremesa</h2>
            </Category>
        </div>
    );
}
