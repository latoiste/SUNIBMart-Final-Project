import AvailabilityFilter from "./filters/AvailabilityFilter";
import BrandFilter from "./filters/BrandFilter";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import RatingFilter from "./filters/RatingFilter";
import TagsFilter from "./filters/TagsFilter";

function FilterPanel() {
    return (
        <div className="w-full">
            <p className="text-4xl font-bold text-yellow-500">Filter</p>
            <div className="space-y-4">
                <AvailabilityFilter/>
                <PriceFilter/>
                <RatingFilter/>
                <BrandFilter/>
                <CategoryFilter/>
                <TagsFilter/>
            </div>
        </div>
    )
}
export default FilterPanel;