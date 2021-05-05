import Category from "./Category.js";

export default function Content() {
    return (
        <div id="content">
            <Category type="food" />
            <Category type="drink" />
            <Category type="desert" />
        </div>
    );
}
