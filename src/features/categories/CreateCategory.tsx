import { Box, Paper, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Category, createCategory } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export function CreateCategory() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    deleted_at: null,
    created_at: '',
    updated_at: '',
  });
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);
    dispatch(createCategory(categoryState));
    enqueueSnackbar('Category created successfully', { variant: 'success' });
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
            <Typography variant="h4">Create Category</Typography>
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
