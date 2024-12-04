import { ProductFamily } from "./product-family";

export interface Product {
    id?: number;
    name: string;
    description: string;
    base_price: number;
    product_family?: ProductFamily;
    variants?: any[];
}
