export interface Product {
  imageFile?: any;
  id: number;
  title?: string;
  description: string;
  image?: string;
  price: number; 
  rating?: {
    rate: number;
    count: number
  };
  category: string;
  quantity?: number;
  featured?:boolean
}
