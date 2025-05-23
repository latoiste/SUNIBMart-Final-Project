import { Filter, Product } from "../types";

export function applyFilters(products: Product[], filter: Filter) {
    var filtered: Product[] = products;
    
    //availability
    if (filter.availability) {
        filtered = filtered.filter(availabilityFilter);
    }

    //price
    if (filter.minPrice || filter.maxPrice) {
        filtered = filtered.filter(product => priceFilter(product, filter));
    }

    //rating
    if (filter.rating) {
        filtered = filtered.filter(product => ratingFilter(product, filter));
    }

    //brand
    if (filter.brand.length > 0) {
        filtered = filtered.filter(product => brandFilter(product, filter));
    }

    //category
    if (filter.category.length > 0) {
        filtered = filtered.filter(product => categoryFilter(product, filter));
    }

    //tags
    if (filter.tags.length > 0) {
        filtered = filtered.filter(product => tagsFilter(product, filter));
    } 
    
    return filtered;
}

function availabilityFilter(product: Product) {
    return product.availabilityStatus !== "Out of Stock" && product.minimumOrderQuantity <= product.stock;
}

function priceFilter(product: Product, filter: Filter) {
    const afterDiscount = (product.price * ((100-product.discountPercentage)/100));

    if (filter.minPrice && filter.maxPrice) {
        return afterDiscount >= filter.minPrice && afterDiscount <= filter.maxPrice;
    } 
    else if (filter.minPrice) {
        return afterDiscount >= filter.minPrice;
    }
    else if (filter.maxPrice) {
        return afterDiscount <= filter.maxPrice;
    }
}

function ratingFilter(product: Product, filter: Filter) {
    if (filter.rating) return product.rating >= filter.rating;
}

function brandFilter(product: Product, filter: Filter) {
    return filter.brand.includes(product.brand ?? "");
}

function categoryFilter(product: Product, filter: Filter) {
    return filter.category.includes(product.category);
}

function tagsFilter(product: Product, filter: Filter) {
    return filter.tags.some(filterTag => product.tags.includes(filterTag));
}