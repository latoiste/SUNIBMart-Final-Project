import { Filter, Product } from "../types";

export function applyFilters(products: Product[], filter: Filter) {
    var filtered: Product[] = products;
    //availability
    if (filter.availability) {
        filtered = products.filter(availabilityFilter);
    }
    return filtered;
}

function availabilityFilter(product: Product) {
    return product.availabilityStatus !== "Out of Stock" && product.minimumOrderQuantity <= product.stock;
}