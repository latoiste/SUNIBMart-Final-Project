import SortOption from "./SortOption";

function PriceSort() {
    return (
        <div className="space-y-2">
            <p className="text-2xl font-semibold">Price</p>
            <SortOption option={"price"}/>
        </div>
    )
}
export default PriceSort;