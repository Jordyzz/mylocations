import { storageService } from './StorageService';
import { dispatch, getState } from '@redux/store';
import {
  initCategories,
  createCategory,
  deleteCategory,
  setSelectedCategory,
  updateCategory
} from '@redux/category';
import { storageKeys } from '@core/storageKeys';
import { Category } from '@src/redux/redux.interface';
import { initLocations } from '@src/redux/location';

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
    this.updateLocationsOnRemovedCategory(category.name);
    dispatch(deleteCategory(category));
    this.setSelectedCategory(null);

    const categories = storageService
      .get(storageKeys.categories)
      .filter(c => c.name !== category.name);
    storageService.set(storageKeys.categories, categories);
  }

  updateLocationsOnRemovedCategory(categoryName: string) {
    const { locations } = getState().location;

    const newLocations = locations.reduce((acc, el) => {
      if (el.categories.includes(categoryName)) {
        if (el.categories.length > 1) {
          el.categories = el.categories.filter(cat => cat !== categoryName);
          acc.push(el);
        }
      } else {
        acc.push(el);
      }

      return acc;
    }, []);

    storageService.set(storageKeys.locations, newLocations);
    dispatch(initLocations(newLocations));
  }

  setSelectedCategory(category: Category) {
    dispatch(setSelectedCategory(category));
  }

  updateCategory(oldName: string, name: string) {
    this.updateLocationsOnUpdatedCategory(oldName, name);
    const categories = storageService.get(storageKeys.categories);
    const updatedCategory: Category = categories.find(c => c.name === oldName);
    updatedCategory.name = name;

    dispatch(updateCategory(categories));
    this.setSelectedCategory(updatedCategory);
    storageService.set(storageKeys.categories, categories);
  }

  updateLocationsOnUpdatedCategory(oldName: string, categoryName: string) {
    const { locations } = getState().location;

    const newLocations = locations.map(lo => {
      if (lo.categories.includes(oldName)) {
        const catIdx = lo.categories.findIndex(c => c == oldName);
        lo.categories[catIdx] = categoryName;
      }

      return lo;
    });

    storageService.set(storageKeys.locations, newLocations);
    dispatch(initLocations(newLocations));
  }
}

export const categoryService = new CategoryService();
