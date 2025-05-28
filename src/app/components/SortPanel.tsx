"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PriceSort from "./sort/PriceSort";
import DiscountSort from "./sort/DiscountSort";
import { useSortContext } from "../context/SortProvider";
import StockSort from "./sort/StockSort";
import RatingSort from "./sort/RatingSort";
import MinOrderSort from "./sort/MinOrderSort";

function SortPanel() {
    const { setSort } = useSortContext();

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <p className="text-4xl font-bold text-yellow-500">Sort</p>
            </AccordionSummary>
            <AccordionDetails className="space-y-4">
                <button onClick={() => setSort({})} className="w-full btn-outline p-1">Reset</button>
                <PriceSort/>
                <hr className="text-yellow-500"/>
                <RatingSort/>
                <hr className="text-yellow-500"/>
                <DiscountSort/>
                <hr className="text-yellow-500"/>
                <StockSort/>
                <hr className="text-yellow-500"/>
                <MinOrderSort/>
            </AccordionDetails>
        </Accordion>
    )
}
export default SortPanel;