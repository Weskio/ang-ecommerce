export interface Product {
    id?: number,
    title: string,
    description: string,
    img: string,
    price: number,  // Change the type to number
    rating?: number,  // Optional property (add it if needed)
    category?: string
}
