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
                options={menuObject.food}
                arrays={props.arrays}
                functions={[isAbleToOrder]}
            >
                <h2>Primeiro, seu prato</h2>
            </Category>
            <Category
                type="drink"
                options={menuObject.drinks}
                arrays={props.arrays}
                functions={[isAbleToOrder]}
            >
                <h2>Agora, sua bebida</h2>
            </Category>
            <Category
                type="desert"
                options={menuObject.deserts}
                arrays={props.arrays}
                functions={[isAbleToOrder]}
            >
                <h2>Por fim, sua sobremesa</h2>
            </Category>
        </div>
    );
}
