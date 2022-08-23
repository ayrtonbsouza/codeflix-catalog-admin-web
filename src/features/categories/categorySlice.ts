import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Category {
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

export const initialState = {
  categories,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    createCategory(state, action) {
      state.categories.push(action.payload);
    },
    updateCategory(state, action) {
      const { id, name, description } = action.payload;
      const cat = state.categories.find(c => c.id === id);
      if (cat) {
        cat.name = name;
        cat.description = description;
      }
    },
    deleteCategory(state, action) {
      const { id } = action.payload;
      const cat = state.categories.find(c => c.id === id);
      if (cat) {
        cat.deleted_at = new Date().toISOString();
        cat.is_active = false;
      }
    },
  },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
