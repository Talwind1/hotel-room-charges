
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';

function RoomProductsDataGrid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/room-products');
      const result = await response.json();
      setRows(result.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const columns = [
    { 
      field: 'reservation_uuid', 
      headerName: 'Room', 
      width: 300,
      renderCell: (params) => (
        <Box>{params.value}</Box>
      )
    },
    { 
      field: 'totalAmount', 
      headerName: 'Total Amount', 
      width: 150,
      renderCell: (params) => `$${params.value}`
    },
    { field: 'itemCount', headerName: 'Item Count', width: 120 },
    { field: 'activeCount', headerName: 'Active Items', width: 120 },
    { field: 'cancelledCount', headerName: 'Cancelled Items', width: 120 },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      getRowId={(row) => row.reservation_uuid}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 25, 50]}
      checkboxSelection={false}
      disableRowSelectionOnClick
    />
  );
}



export { RoomProductsTable, RoomProductsDataGrid, RoomProductsAntdTable };