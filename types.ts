export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isPrime: boolean;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}