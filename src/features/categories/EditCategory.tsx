import { Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategoryById } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export function EditCategory() {
  const id = useParams().id || '';
  const [isDisabled, setIsDisabled] = useState(false);
  const category = useAppSelector(state => selectCategoryById(state, id));

  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  const handleToggle = (event: any) => {
    console.log(event.target.value);
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
          category={category}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={() => {
            console.log('submit');
          }}
          onChange={handleChange}
          onChangeToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
}
