export type SearchPizzaParams = {
  currentPage: string;
  order: string;
  sortBy: string;
  category: string;
  search: string;
};

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
