import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Category {
  id: string;
  name: string;
  deleted_at: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: null | string;
}

const categories: Category[] = [
  {
    id: '0cef8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
    name: 'Peach',
    deleted_at: null,
    is_active: true,
    created_at: '2020-01-01T00:00:00.000Z',
    updated_at: '2020-01-01T00:00:00.000Z',
    description: 'Some peach description',
  },
  {
    id: '0cef8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f6',
    name: 'Grape',
    deleted_at: null,
    is_active: true,
    created_at: '2020-01-01T00:00:00.000Z',
    updated_at: '2020-01-01T00:00:00.000Z',
    description: 'Some grape description',
  },
  {
    id: '0cef8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f1',
    name: 'Banana',
    deleted_at: null,
    is_active: false,
    created_at: '2020-01-01T00:00:00.000Z',
    updated_at: '2020-01-01T00:00:00.000Z',
    description: 'Some banana description',
  },
];

export const initialState = categories;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      const index = state.findIndex(
        category => category.id === action.payload.id,
      );

      state[index] = action.payload;
    },
    deleteCategory(state, action) {
      const index = state.findIndex(
        category => category.id === action.payload.id,
      );
      state.splice(index, 1);
    },
  },
});

export const selectCategories = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: string) => {
  const response = state.categories.find(category => category.id === id);
  return (
    response || {
      id: '',
      name: '',
      deleted_at: null,
      is_active: false,
      created_at: '',
      updated_at: '',
      description: null,
    }
  );
};
export const { createCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
