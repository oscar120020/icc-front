import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getContestants, getRankings } from "../../api/rankingApi";
import { ContestantFormValues } from "../../components/form/formInterfaces";
import { FormModal, ContestantForm } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";

const initialValues: ContestantFormValues = {
  username: "",
  imageUrl: "",
  fullName: "",
  socialLink: "",
};

const Contestants = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useQuery(["contestants"], getContestants, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Nombre de usuario", width: 300 },
    { field: "imageUrl", headerName: "Url de imagen", width: 300 },
    { field: "fullName", headerName: "Nombre completo", width: 300 },
    { field: "socialLink", headerName: "Url de red social", width: 300 },
    {
      field: "editar",
      headerName: "Editar participante",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => deleteRanking(params.row.seasonId)}
        >
          Editar participante
        </Button>
      ),
    },
  ];

  const rows = data?.map((contestant) => {
    return {
      id: contestant.id,
      username: contestant.userName,
      imageUrl: contestant.imageUrl,
      fullName: contestant.fullName,
      socialLink: contestant.socialLink,
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
      title={"Participantes | Admin"}
      pageDescription={"Panel de administración - rankings"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Participantes - Admin
      </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
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
          Crear participante
        </Button>
      </Box>
      <FormModal open={open} handleClose={handleCloseModal}>
        <ContestantForm initialValues={initialValues} handleClose={handleCloseModal} />
      </FormModal>
    </AdminLayout>
  );
};

export default Contestants;
