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
    ] = props.functions;

    return (
        <div id="content">
            <Category
                menu={menuObject.food}
                selectedIDs={selectedFoodIDs}
                setSelectedIDs={setSelectedFoodIDs}
                functions={props.functions}
            >
                <h2>Primeiro, seu prato</h2>
            </Category>
            <Category
                menu={menuObject.drinks}
                selectedIDs={selectedDrinksIDs}
                setSelectedIDs={setSelectedDrinksIDs}
                functions={props.functions}
            >
                <h2>Agora, sua bebida</h2>
            </Category>
            <Category
                menu={menuObject.deserts}
                selectedIDs={selectedDesertsIDs}
                setSelectedIDs={setSelectedDesertsIDs}
                functions={props.functions}
            >
                <h2>Por fim, sua sobremesa</h2>
            </Category>
        </div>
    );
}
