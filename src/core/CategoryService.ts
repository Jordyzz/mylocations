import { storageService } from './StorageService';
import { dispatch } from '@redux/store';
import {
  initCategories,
  createCategory,
  deleteCategory,
  setSelectedCategory,
  updateCategory
} from '@redux/category';
import { storageKeys } from '@core/storageKeys';
import { Category } from '@src/redux/redux.interface';

class CategoryService {
  initCategories() {
    const categories = storageService.get(storageKeys.categories);
    categories && dispatch(initCategories(categories));
  }

  createCategory(name: string) {
    dispatch(createCategory({ name }));

    const categories = storageService.get(storageKeys.categories);
    storageService.set(storageKeys.categories, categories ? [...categories, { name }] : [{ name }]);
  }

  deleteCategory(category: Category) {
    dispatch(deleteCategory(category));
    this.setSelectedCategory(null);

    const categories = storageService
      .get(storageKeys.categories)
      .filter(c => c.name !== category.name);
    storageService.set(storageKeys.categories, categories);
  }

  setSelectedCategory(category: Category) {
    dispatch(setSelectedCategory(category));
  }

  updateCategory(oldName: string, name: string) {
    const categories = storageService.get(storageKeys.categories);
    const updatedCategory: Category = categories.find(c => c.name === oldName);
    updatedCategory.name = name;

    dispatch(updateCategory(categories));
    this.setSelectedCategory(updatedCategory);
    storageService.set(storageKeys.categories, categories);
  }
}

export const categoryService = new CategoryService();
