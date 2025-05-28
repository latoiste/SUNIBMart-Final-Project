import { Filter, Product } from "../types";

export function applyFilters(products: Product[], filter: Filter) {
    var filteredProducts = products;
    
    //availability
    if (filter.availability) {
        filteredProducts = filteredProducts.filter(filterAvailability);
    }

    //price
    if (filter.minPrice || filter.maxPrice) {
        filteredProducts = filteredProducts.filter(product => filterPrice(product, filter));
    }

    //rating
    if (filter.rating) {
        filteredProducts = filteredProducts.filter(product => filterRating(product, filter));
    }

    //brand
    if (filter.brand.length > 0) {
        filteredProducts = filteredProducts.filter(product => filterBrand(product, filter));
    }

    //category
    if (filter.category.length > 0) {
        filteredProducts = filteredProducts.filter(product => filterCategory(product, filter));
    }

    //tags
    if (filter.tags.length > 0) {
        filteredProducts = filteredProducts.filter(product => filterTags(product, filter));
    } 

    return filteredProducts;
}

function filterAvailability(product: Product) {
    return product.availabilityStatus !== "Out of Stock" && product.minimumOrderQuantity <= product.stock;
}

function filterPrice(product: Product, filter: Filter) {
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

function filterRating(product: Product, filter: Filter) {
    if (filter.rating) return product.rating >= filter.rating;
}

function filterBrand(product: Product, filter: Filter) {
    return filter.brand.includes(product.brand ?? "");
}

function filterCategory(product: Product, filter: Filter) {
    return filter.category.includes(product.category);
}

function filterTags(product: Product, filter: Filter) {
    return filter.tags.some(filterTag => product.tags.includes(filterTag));
}