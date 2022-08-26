import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../categorySlice';

type Props = {
  category: Category;
  isDisabled: boolean;
  isLoading?: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CategoryForm({
  category,
  isDisabled = false,
  isLoading = false,
  onSubmit,
  onChange,
  onChangeToggle,
}: Props) {
  return (
    <Box p={2}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="name"
                label="Name"
                value={category.name}
                disabled={isDisabled}
                onChange={onChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                name="description"
                label="Description"
                value={category.description}
                disabled={isDisabled}
                onChange={onChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    name="is_active"
                    color="secondary"
                    onChange={onChangeToggle}
                    checked={category.is_active}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" gap={2}>
              <Button variant="contained" component={Link} to="/categories">
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                component={Link}
                disabled={isDisabled}
                to="/categories"
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

CategoryForm.defaultProps = {
  isLoading: false,
};
