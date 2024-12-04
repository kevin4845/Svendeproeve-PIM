import { Product } from "./product";

export interface Variant {
  id?: number;
  name: string;
  description: string;
  extra_price: number;
  product_id: number;
  product?: Product;
}
