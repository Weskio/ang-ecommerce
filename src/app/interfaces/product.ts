export interface Product {
  imageFile?: any;
  id?: number;
  title: string;
  description: string;
  image?: string;
  price: number; // Change the type to number
  rating?: {}; // Optional property (add it if needed)
  category?: string;
  quantity?: number;
  featured?:boolean
}
