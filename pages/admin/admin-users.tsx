import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAdminUsers, getRankings } from "../../api/rankingApi";
import {
  AdminUserFormValues,
  RankingFormValues,
} from "../../components/form/formInterfaces";
import { FormModal, AdminUserForm } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookie from "js-cookie";

const initialValues: AdminUserFormValues = {
  username: "",
  password: "",
};

const AdminUsers = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useQuery(
    ["admin"],
    () => getAdminUsers(Cookie.get("token") || ""),
    {
      retry: 1,
    }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Nombre de usuario", width: 200 },
    {
      field: "userId",
      headerName: "Eliminar usuario",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => deleteRanking(params.row.userId)}
        >
          Eliminar usuario
        </Button>
      ),
    },
  ];

  const rows = data?.map((user) => {
    return {
      id: user.id,
      username: user.username,
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
      pageDescription={"Panel de administración - Admin Users"}
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
          Crear usuario administrador
        </Button>
      </Box>
      <FormModal open={open} handleClose={handleCloseModal}>
        <AdminUserForm
          handleClose={handleCloseModal}
          initialValues={initialValues}
        />
      </FormModal>
    </AdminLayout>
  );
};

export default AdminUsers;
