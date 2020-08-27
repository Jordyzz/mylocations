export interface StoreState {
  config: ConfigState;
  category: CategoryState;
  location: LocationState;
}

export interface StoreAction {
  type: string;
  payload: any;
}

export interface ConfigState {
  theme: string;
}

export interface CategoryState {
  categories: Array<Category>;
  selectedCategory: Category;
}

export interface Category {
  name: string;
}

export interface LocationState {
  locations: Array<Location>;
}

export interface Location {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  categories: Array<string>;
}
