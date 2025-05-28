import SortOption from "./SortOption";

function RatingSort() {
    return (
        <div className="space-y-2">
            <p className="text-2xl font-semibold">Rating</p>
            <SortOption option={"rating"}/>
        </div>
    )
}
export default RatingSort;