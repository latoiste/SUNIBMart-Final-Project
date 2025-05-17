export interface Review {
    comment: string,
    date: string,
    rating: number,
    reviewerEmail: string,
    reviewerName: string
}

export interface Product {
    availabilityStatus: string,
    brand?: string,
    category: string,
    description: string,
    dimensions: {
        width: number,
        height: number,
        depth: number
    }
    discountPercentage: number,
    id: number,
    images: string[],
    meta: {
        barcode: string,
        createdAt: string,
        qrCode: string,
        updatedAt: string,
    }
    minimumOrderQuantity: number,
    price: number,
    rating: number,
    returnPolicy: string,
    reviews: Review[],
    shippingInformation: string,
    sku: string,
    stock: number,
    tags: string[],
    thumbnail: string,
    title: string,
    warrantyInformation: string,
    weight: number
}

export interface CartItem {
    product: Product,
    quantity: number,
    price: number,
}

export interface User {
    username: string,
    password: string,
    shoppingCart: CartItem[],
}