"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PriceSort from "./sort/PriceSort";
import DiscountSort from "./sort/DiscountSort";
import { useSortContext } from "../context/SortProvider";
import StockSort from "./sort/StockSort";
import RatingSort from "./sort/RatingSort";
import MinOrderSort from "./sort/MinOrderSort";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SortPanel() {
    const { setSort } = useSortContext();
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