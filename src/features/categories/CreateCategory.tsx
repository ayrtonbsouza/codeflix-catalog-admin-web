import { Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { Category } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export function CreateCategory() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    deleted_at: null,
    created_at: '',
    updated_at: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name, event.target.value);
  }

  function handleChangeToggle(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name, event.target.checked);
  }

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryForm
          category={category}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={() => {
            console.log('submit');
          }}
          onChange={handleChange}
          onChangeToggle={handleChangeToggle}
        />
      </Paper>
    </Box>
  );
}
