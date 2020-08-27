import { Category } from '@redux/redux.interface';

export interface SortBarProps {
  sort: string;
  onSort: () => void;
  filterBy: string;
  groupBy: boolean;
  onClear: () => void;
  categories: Array<Category>;
  handleFilter: (value) => void;
  handleGroupBy: () => void;
}
