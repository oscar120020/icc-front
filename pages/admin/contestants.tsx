import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getContestants, removeCompetitor } from "../../api";
import { ContestantFormValues } from "../../components/form/formInterfaces";
import { FormModal, ContestantForm } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookies from "js-cookie";

const initialValues: ContestantFormValues = {
  username: "",
  imageUrl: "",
  fullName: "",
  socialLink: "",
};

const Contestants = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [currentValues, setCurrentValues] =
    useState<ContestantFormValues>(initialValues);
  const { data, error, isLoading, refetch } = useQuery(["contestants"], getContestants, {
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
          onClick={() => openModalToEdit({
            id: params.row.id,
            username: params.row.username,
            imageUrl: params.row.imageUrl,
            fullName: params.row.fullName,
            socialLink: params.row.socialLink,
          })}
        >
          Editar participante
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Eliminar participante",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => deleteCompetitor(params.row.id)}
        >
          Eliminar participante
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

  const deleteCompetitor = (id: string) => {
    const token = Cookies.get('token') || ''
    removeCompetitor(id, token)
    .then(res => {
      refetch()
    })
    .catch(err => {
      console.log(err);
    })
  };

  const openModalToEdit = (values: ContestantFormValues) => {
    setCurrentValues(values);
    setOpen(true);
  };

  const openModalToCreate = () => {
    setCurrentValues(initialValues);
    setOpen(true);
  };

  return (
    <AdminLayout
      title={"Participantes | Admin"}
      pageDescription={"Panel de administración - Participantes"}
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
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear participante
        </Button>
      </Box> */}
      <FormModal open={open} handleClose={handleCloseModal}>
        <ContestantForm initialValues={currentValues} handleClose={handleCloseModal} revalidate={refetch} />
      </FormModal>
    </AdminLayout>
  );
};

export default Contestants;
