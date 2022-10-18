import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSeasons } from "../../api/rankingApi";
import { FormModal } from "../../components/form/FormModal";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";

const Seasons = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(true);
  const { data, error, isLoading } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Nombre", width: 270 },
    { field: "beginning", headerName: "Empieza en", width: 170 },
    { field: "end", headerName: "Termina en", width: 170 },
    {
      field: "edit",
      headerName: "Editar",
      width: 170,
      renderCell: (params) => (
        <Button fullWidth variant="outlined" color="primary" >Editar temporada</Button>
      )},
  ];

  const rows = data?.map((season) => {
    return {
      id: season.id,
      name: season.name,
      beginning: season.beginning,
      end: season.end,
    };
  });

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <AdminLayout
      title={"Seasons | Admin"}
      pageDescription={"Panel de administración - seasons"}
    >
      <Typography variant="h2" sx={{mb: 2}} >Temporadas - Admin</Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows || []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          loading={isLoading}
          components={{ Toolbar: CustomToolbar }}
          pagination
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}} >
        <Button size="large" variant="contained" sx={{backgroundColor: '#1985A1', color: 'white'}} >Agregar temporada</Button>
      </Box>
      <FormModal open={open} handleClose={handleClose} />
    </AdminLayout>
  );
};

export default Seasons;
