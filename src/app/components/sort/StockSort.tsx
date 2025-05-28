import SortOption from "./SortOption";

function StockSort() {
    return (
        <div className="space-y-2">
            <p className="text-2xl font-semibold">Stock</p>
            <SortOption option={"stock"}/>
        </div>
    )
}
export default StockSort;