export interface Product {
  id: string;
  name: string;
  brand: string;
  quality: number;
  category: string;
  typ: string;
  color: string;
  productionYear: string;
  countryOfOrigin: string;
  img?: any;
  price: number;
}

export interface Order {
  email: string;
  name: string;
  surname: string;
  adress: string;
  products: string[];
  postalCode: string;
  city: string;
  country: string;
  cardNumber: string;
  cardDate: string;
  cardCvc: string;
}
