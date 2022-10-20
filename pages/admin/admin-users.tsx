import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getRankings } from "../../api/rankingApi";
import { RankingFormValues } from "../../components/form/formInterfaces";
import { RankingForm, FormModal } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";

const initialValues: RankingFormValues = {
  url: "",
  seasonId: "",
};

const AdminUsers = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useQuery(["rankings"], getRankings, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "url", headerName: "Url del ranking", width: 300 },
    { field: "season", headerName: "Temporada", width: 300 },
    {
      field: "seasonId",
      headerName: "Eliminar ranking",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => deleteRanking(params.row.seasonId)}
        >
          Eliminar ranking
        </Button>
      ),
    },
  ];

  const rows = data?.map((ranking) => {
    return {
      id: ranking.id,
      url: ranking.url,
      season: ranking.season.name,
      seasonId: ranking.season.id,
    };
  });

  const handleCloseModal = () => {
    setOpen(false);
  };

  const deleteRanking = (id: string) => {
    setOpen(true);
  };

  const openModalToCreate = () => {
    setOpen(true);
  };

  return (
    <AdminLayout
      title={"Admin Users | Admin"}
      pageDescription={"Panel de administración - rankings"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Admin Users - Admin
      </Typography>
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear ranking
        </Button>
      </Box>
      <FormModal open={open} handleClose={handleCloseModal}>
        <RankingForm initialValues={initialValues} />
      </FormModal>
    </AdminLayout>
  );
};

export default AdminUsers;
