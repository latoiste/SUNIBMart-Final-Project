import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AvailabilityFilter from "./filters/AvailabilityFilter";
import BrandFilter from "./filters/BrandFilter";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import RatingFilter from "./filters/RatingFilter";
import TagsFilter from "./filters/TagsFilter";

function FilterPanel() {
    return (
        <Accordion className="w-full" defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <p className="text-4xl font-bold text-yellow-500">Filter</p>
            </AccordionSummary>
            <AccordionDetails className="space-y-4">                    
                <AvailabilityFilter/>
                <hr className="text-yellow-500"/>
                <PriceFilter/>
                <hr className="text-yellow-500"/>
                <RatingFilter/>
                <hr className="text-yellow-500"/>
                <BrandFilter/>
                <hr className="text-yellow-500"/>
                <CategoryFilter/>
                <hr className="text-yellow-500"/>
                <TagsFilter/>
            </AccordionDetails>
        </Accordion>
    )
}
export default FilterPanel;