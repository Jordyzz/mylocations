export interface StoreState {
  config: ConfigState;
  category: CategoryState;
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
