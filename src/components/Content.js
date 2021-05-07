import Category from "./Category";

export default function Content(props) {
    const [
        selectedFoodIDs,
        selectedDrinksIDs,
        selectedDesertsIDs,
        menuObject,
    ] = props.arrays;
    const [setButtonState] = props.functions;
    function isAbleToOrder() {
        console.log(
            selectedFoodIDs.length,
            selectedDrinksIDs.length,
            selectedDesertsIDs.length
        );
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
                type="food"
                menu={menuObject.food}
                selectedIDs={selectedFoodIDs}
                functions={[isAbleToOrder]}
            >
                <h2>Primeiro, seu prato</h2>
            </Category>
            <Category
                type="drink"
                menu={menuObject.drinks}
                selectedIDs={selectedDrinksIDs}
                functions={[isAbleToOrder]}
            >
                <h2>Agora, sua bebida</h2>
            </Category>
            <Category
                type="desert"
                menu={menuObject.deserts}
                selectedIDs={selectedDesertsIDs}
                functions={[isAbleToOrder]}
            >
                <h2>Por fim, sua sobremesa</h2>
            </Category>
        </div>
    );
}
