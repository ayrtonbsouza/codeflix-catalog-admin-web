import { Box, Button, IconButton, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from './categorySlice';

export function ListCategory() {
  const { categories } = useAppSelector(selectCategories);

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? 'primary' : 'secondary'}>
        {rowData.value ? 'Active' : 'Inactive'}
      </Typography>
    );
  }

  function renderActionsCell(rowData: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log('Click!')}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  const rows: GridRowsProp = categories.map(category => ({
    id: category.id,
    name: category.name,
    is_active: category.is_active,
    created_at: new Date(category.created_at).toLocaleDateString('pt-BR'),
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'is_active',
      headerName: 'Active',
      flex: 1,
      type: 'boolean',
      renderCell: renderIsActiveCell,
    },
    { field: 'created_at', headerName: 'Created At', flex: 1 },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: '2rem' }}
        >
          New Category
        </Button>
      </Box>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}
