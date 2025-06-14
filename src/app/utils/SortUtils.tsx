import { Product, Sort, SortOrder } from "../types";

export function applySort(products: Product[], sort: Sort) {
    let sortedProducts = [...products];
    
    if (sort.price) {
        sortPrice(sortedProducts, sort.price);
    }

    if (sort.discount) {
        sortDiscount(sortedProducts, sort.discount);
    }

    if (sort.stock) {
        sortStock(sortedProducts, sort.stock);
    }

    if (sort.rating) {
        sortRating(sortedProducts, sort.rating);
    }

    if (sort.minOrder) {
        sortMinOrder(sortedProducts, sort.minOrder);
    }

    return sortedProducts;
}

function sortPrice(products: Product[], order: SortOrder) {
    if (order === "ascending") {
        products.sort((a , b) => a.price - b.price)
    } else {
        products.sort((a , b) => b.price - a.price);
    }
}

function sortDiscount(products: Product[], order: SortOrder) {
    if (order === "ascending") {
        products.sort((a , b) => a.discountPercentage - b.discountPercentage)
    } else {
        products.sort((a , b) => b.discountPercentage - a.discountPercentage);
    }
}

function sortStock(products: Product[], order: SortOrder) {
    if (order === "ascending") {
        products.sort((a , b) => a.stock - b.stock)
    } else {
        products.sort((a , b) => b.stock - a.stock);
    }
}

function sortRating(products: Product[], order: SortOrder) {
    if (order === "ascending") {
        products.sort((a , b) => a.rating - b.rating)
    } else {
        products.sort((a , b) => b.rating - a.rating);
    }
}

function sortMinOrder(products: Product[], order: SortOrder) {
    if (order === "ascending") {
        products.sort((a , b) => a.minimumOrderQuantity - b.minimumOrderQuantity)
    } else {
        products.sort((a , b) => b.minimumOrderQuantity - a.minimumOrderQuantity);
    }
}
