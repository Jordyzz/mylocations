import { CategoryState, StoreAction } from './redux.interface.d';

export const initCategories = (payload): StoreAction => ({
  type: 'category/INIT_CATEGORIES',
  payload
});

export const setSelectedCategory = (payload): StoreAction => ({
  type: 'category/SET_CATEGORY',
  payload
});

export const createCategory = (payload): StoreAction => ({
  type: 'category/CREATE_CATEGORY',
  payload
});

export const deleteCategory = (payload): StoreAction => ({
  type: 'category/DELETE_CATEGORY',
  payload
});

export const updateCategory = (payload): StoreAction => ({
  type: 'category/UPDATE_CATEGORY',
  payload
});

const initialState: CategoryState = {
  categories: [],
  selectedCategory: null
};

export default function categoryReducer(state: CategoryState = initialState, action: StoreAction) {
  switch (action.type) {
    case 'category/INIT_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'category/SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'category/CREATE_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    case 'category/DELETE_CATEGORY':
      return { ...state, categories: state.categories.filter(c => c.name !== action.payload.name) };
    case 'category/UPDATE_CATEGORY':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
