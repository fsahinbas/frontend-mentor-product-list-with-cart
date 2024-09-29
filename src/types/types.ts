export type Image = {
  thumbnail: string;
  mobile: string;
  desktop: string;
  tablet: string;
};

export type Product = {
  category: string;
  image: Image;
  name: string;
  price: number;
};

export type CartItem = {
  category: string;
  image: Image;
  name: string;
  price: number;
  quantity: number;
};
