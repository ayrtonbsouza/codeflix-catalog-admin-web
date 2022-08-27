import { Box, Paper, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Category, selectCategoryById, updateCategory } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export function EditCategory() {
  const id = useParams().id || '';
  const [isDisabled, setIsDisabled] = useState(false);
  const category = useAppSelector(state => selectCategoryById(state, id));
  const [categoryState, setCategoryState] = useState<Category>(category);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);
    dispatch(updateCategory(categoryState));
    enqueueSnackbar('Category updated successfully', { variant: 'success' });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>
        <CategoryForm
          category={categoryState}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={onSubmit}
          onChange={handleChange}
          onChangeToggle={handleToggleChange}
        />
      </Paper>
    </Box>
  );
}
