export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
};

export type CategoryFilterType = {
  checkedColor: string;
  filters: (number | string)[];
  inputType: string;
  standardColor: string;
  title: string;
  type: string;
};
