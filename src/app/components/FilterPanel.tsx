"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AvailabilityFilter from "./filters/AvailabilityFilter";
import BrandFilter from "./filters/BrandFilter";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import RatingFilter from "./filters/RatingFilter";
import TagsFilter from "./filters/TagsFilter";
import { useFilterContext } from "../context/FilterProvider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function FilterPanel() {
    const { setFilter } = useFilterContext();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <Accordion defaultExpanded sx={{
                bgcolor: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "oklch(87.2% 0.01 258.338)" : "",
                border: theme === "dark" ? 1 : 0,
                borderColor: "oklch(26.9% 0 0)"
            }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <p className="text-4xl font-bold text-yellow-500">Filter</p>
            </AccordionSummary>
            <AccordionDetails className="space-y-4">
                <button onClick={() => 
                        setFilter({brand: [],
                            category: [],
                            tags: [],
                            rating: 1,
                            availability: false,})} 
                        className="w-full btn-outline p-1">Reset</button>
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